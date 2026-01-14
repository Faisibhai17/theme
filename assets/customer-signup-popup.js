// Enhanced form handling for customer registration with AJAX submission
document.addEventListener('DOMContentLoaded', () => {
  const freeForm = document.getElementById('CustomerSignupForm-Free');
  const paidForm = document.getElementById('CustomerSignupForm-Paid');

  // Helper function to handle form submission
  function handleFormSubmit(event, form, customerType) {
    event.preventDefault();
    
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.classList.add('loading');
    submitButton.innerHTML = 'Creating Account...';
    
    // Get business details
    const businessNameField = form.querySelector('[id*="BusinessName"]');
    const businessDetailsField = form.querySelector('[id*="BusinessDetails"]');
    const businessName = businessNameField ? businessNameField.value : '';
    const businessDetails = businessDetailsField ? businessDetailsField.value : '';
    
    // Format note with all information
    const noteField = form.querySelector('[id*="CustomerNote"]');
    if (noteField) {
      let noteContent = `Customer Type: ${customerType}`;
      if (businessName) {
        noteContent += `\nBusiness Name: ${businessName}`;
      }
      if (businessDetails) {
        noteContent += `\nBusiness Details: ${businessDetails}`;
      }
      noteField.value = noteContent;
    }
    
    // Prepare form data
    const formData = new FormData(form);
    
    // Get the form action URL (customer registration endpoint)
    const formAction = form.action || '/account';
    
    // Submit via fetch
    const config = fetchConfig('html');
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    delete config.headers['Content-Type'];
    config.body = formData;
    config.method = 'POST';
    
    fetch(formAction, config)
      .then((response) => {
        // Check the final URL after redirects
        const finalUrl = response.url;
        return response.text().then((html) => {
          return { url: finalUrl, html: html, status: response.status };
        });
      })
      .then((result) => {
        const html = result.html;
        const finalUrl = result.url;
        const status = result.status;
        
        // Check for "customer account creation has been disabled" message FIRST
        const accountDisabled = html.includes('Customer account creation has been disabled') || 
                               html.includes('account creation has been disabled') ||
                               (html.includes('Something went wrong') && html.includes('Customer account creation')) ||
                               html.includes('Customer account creation has been disabled');
        
        // Also check if we got redirected to /account with an error (not a successful account page)
        const isAccountErrorPage = finalUrl.includes('/account') && 
                                  !finalUrl.includes('/account/register') &&
                                  !finalUrl.includes('/account/login') &&
                                  (html.includes('Something went wrong') || html.includes('Customer account creation has been disabled'));
        
        if (accountDisabled || isAccountErrorPage) {
          // Show error about disabled accounts
          const formWrapper = form.closest('.customer-signup-modal__form-wrapper');
          let errorContainer = formWrapper.querySelector('.form__error-container');
          
          // Remove any existing error containers
          const existingErrors = formWrapper.querySelectorAll('.form__error-container');
          existingErrors.forEach(err => err.remove());
          
          errorContainer = document.createElement('div');
          errorContainer.className = 'form__error-container';
          form.insertBefore(errorContainer, form.firstChild);
          
          errorContainer.innerHTML = '<div class="form__message"><strong>Customer account creation is disabled</strong><br><br>To enable customer accounts:<br>1. Go to Shopify Admin → Settings → Customer accounts<br>2. Select "Accounts are optional" or "Accounts are required"<br>3. Click Save<br><br>Once enabled, you can create customer accounts through this form.</div>';
          errorContainer.style.display = 'block';
          
          // Scroll to top to show error
          formWrapper.scrollTop = 0;
          
          // Re-enable submit button
          submitButton.disabled = false;
          submitButton.classList.remove('loading');
          submitButton.innerHTML = originalButtonText;
          return;
        }
        
        // Check if we were redirected to account page (success)
        const isAccountPage = finalUrl.includes('/account') && 
                             !finalUrl.includes('/account/register') &&
                             !finalUrl.includes('/account/login') &&
                             status === 200;
        
        // Parse the HTML response
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Check for errors in the response
        const errorMessages = doc.querySelectorAll('.form__message, .errors, [class*="error"], .customer .field input[aria-invalid="true"]');
        const hasFormErrors = errorMessages.length > 0;
        const hasErrorText = html.includes('form__message') || html.includes('error');
        
        // Check if form still exists (indicates errors or still on registration page)
        const registrationForm = doc.querySelector('form[action*="account"], form[id*="RegisterForm"], .customer.register form');
        const isStillOnRegistrationPage = registrationForm !== null && !isAccountPage;
        
        // Check for form errors first
        if (hasFormErrors || hasErrorText || isStillOnRegistrationPage) {
          // Extract and display errors
          let errorHTML = '';
          errorMessages.forEach((error) => {
            errorHTML += error.outerHTML;
          });
          
          // If no specific errors found, check for general error messages
          if (!errorHTML) {
            const generalErrors = doc.querySelectorAll('ul li, .notice--error, .alert--error');
            generalErrors.forEach((error) => {
              errorHTML += error.outerHTML;
            });
          }
          
          // Display errors in the form
          const formWrapper = form.closest('.customer-signup-modal__form-wrapper');
          let errorContainer = formWrapper.querySelector('.form__error-container');
          
          // Remove any existing error containers
          const existingErrors = formWrapper.querySelectorAll('.form__error-container');
          existingErrors.forEach(err => err.remove());
          
          errorContainer = document.createElement('div');
          errorContainer.className = 'form__error-container';
          form.insertBefore(errorContainer, form.firstChild);
          
          errorContainer.innerHTML = errorHTML || '<div class="form__message">An error occurred. Please try again.</div>';
          errorContainer.style.display = 'block';
          
          // Scroll to top of form to show errors
          formWrapper.scrollTop = 0;
          
          // Re-enable submit button
          submitButton.disabled = false;
          submitButton.classList.remove('loading');
          submitButton.innerHTML = originalButtonText;
        } else if (isAccountPage || (!hasFormErrors && !hasErrorText && !isStillOnRegistrationPage)) {
          // Success - customer was created
          // Show success message
          const formWrapper = form.closest('.customer-signup-modal__form-wrapper');
          let successContainer = formWrapper.querySelector('.customer-signup-form__success');
          
          if (!successContainer) {
            successContainer = document.createElement('div');
            successContainer.className = 'customer-signup-form__success';
            form.insertBefore(successContainer, form.firstChild);
          }
          
          successContainer.innerHTML = '<p>Account created successfully! Redirecting to your account...</p>';
          successContainer.classList.add('show');
          
          // Hide the form
          form.style.display = 'none';
          
          // Close modal after 2 seconds and redirect to account
          setTimeout(() => {
            const modal = form.closest('modal-dialog');
            if (modal) {
              modal.hide();
            }
            // Redirect to account page
            window.location.href = '/account';
          }, 2000);
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        
        // Show error message
        const formWrapper = form.closest('.customer-signup-modal__form-wrapper');
        let errorContainer = formWrapper.querySelector('.form__error-container');
        
        if (!errorContainer) {
          errorContainer = document.createElement('div');
          errorContainer.className = 'form__error-container';
          form.insertBefore(errorContainer, form.firstChild);
        }
        
        errorContainer.innerHTML = '<div class="form__message">An error occurred. Please try again.</div>';
        errorContainer.style.display = 'block';
        
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
        submitButton.innerHTML = originalButtonText;
      });
  }

  // Handle free customer form
  if (freeForm) {
    freeForm.addEventListener('submit', function(e) {
      handleFormSubmit(e, freeForm, 'Free Customer');
    });
  }

  // Handle paid customer form
  if (paidForm) {
    paidForm.addEventListener('submit', function(e) {
      handleFormSubmit(e, paidForm, 'Paid Customer');
    });
  }
});

// Note: To automatically tag customers, you have a few options:
// 1. Use Shopify Flow: Create a flow that triggers on customer creation and tags customers based on the note field
// 2. Use a Shopify App: Install an app that can tag customers based on form submissions
// 3. Use Shopify Admin API: Create a webhook or use a backend service to tag customers via API
//    (This requires API access and proper authentication)

customElements.define('customer-signup-popup', CustomerSignupPopup);
