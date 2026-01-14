# Customer Tagging Setup Guide

## Overview
The customer signup form stores the customer type ("free customer" or "paid customer") in the customer's note field along with their business details. To automatically tag customers, you need to set up Shopify Flow.

## Option 1: Shopify Flow (Recommended - Free)

Shopify Flow is a free automation tool that can automatically tag customers based on their note field.

### Setup Steps:

1. **Go to Shopify Admin** → Settings → Apps and sales channels → Shopify Flow

2. **Create a New Workflow:**
   - Click "Create workflow"
   - Name it: "Tag Free Customers"
   - Choose trigger: "Customer created"

3. **Add Condition:**
   - Add condition: "Customer note contains"
   - Value: "Customer Type: Free Customer"

4. **Add Action:**
   - Add action: "Add customer tag"
   - Tag name: "free customer"

5. **Create Second Workflow:**
   - Repeat steps 2-4 for paid customers
   - Condition: "Customer note contains" → "Customer Type: Paid Customer"
   - Action: "Add customer tag" → "paid customer"

6. **Activate Both Workflows**

## Option 2: Webhook Handler (Advanced)

If you have a backend server, you can create a webhook that listens for customer creation events and tags customers automatically.

### Webhook Setup:

1. **Create Webhook in Shopify Admin:**
   - Go to Settings → Notifications → Webhooks
   - Create webhook for "Customer creation"
   - Point to your webhook endpoint

2. **Webhook Handler Example (Node.js):**

```javascript
// This is a server-side example - requires Shopify Admin API access
const Shopify = require('@shopify/shopify-api');

app.post('/webhook/customer-created', async (req, res) => {
  const customer = req.body;
  const note = customer.note || '';
  
  let tagToAdd = null;
  if (note.includes('Customer Type: Free Customer')) {
    tagToAdd = 'free customer';
  } else if (note.includes('Customer Type: Paid Customer')) {
    tagToAdd = 'paid customer';
  }
  
  if (tagToAdd) {
    // Add tag using Shopify Admin API
    const session = await Shopify.Utils.loadCurrentSession(req, res);
    const client = new Shopify.Clients.Rest(session.shop, session.accessToken);
    
    const tags = customer.tags ? customer.tags.split(', ') : [];
    if (!tags.includes(tagToAdd)) {
      tags.push(tagToAdd);
      await client.put({
        path: `customers/${customer.id}.json`,
        data: {
          customer: {
            id: customer.id,
            tags: tags.join(', ')
          }
        }
      });
    }
  }
  
  res.status(200).send('OK');
});
```

## Option 3: Third-Party Apps

You can use apps like:
- **Zapier** - Connect Shopify to automate tagging
- **Make.com (formerly Integromat)** - Similar automation platform
- **Shopify Flow** (recommended - free and built-in)

## Testing

After setup:
1. Test by creating a new customer through the signup form
2. Check the customer's note field in Shopify Admin → Customers
3. Verify the tag was automatically added

## Notes

- Customer tags are stored in the customer's note field in the format:
  ```
  Customer Type: [Free/Paid] Customer
  Business Name: [Business Name]
  Business Details: [Business Details]
  ```

- The tag will be added automatically once Shopify Flow is set up
- Tags can be used for segmentation, email marketing, and access control
