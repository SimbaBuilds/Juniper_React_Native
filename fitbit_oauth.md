Add webhook sub to fitbit oauth:

Your webhook endpoint is ready at:
https://ydbabipbxxleeiiysojv.supabase.co/functions/v1/webhook-handl
er/fitbit/{user_id}

To set up webhook subscriptions, you need to:

1. For each user who authorizes your app:
- Create webhook subscriptions for the data types you want
(activities, sleep, etc.)
- Use the Fitbit subscription API
2. Subscription API endpoint:
POST [https://api.fitbit.com/1/user/-/[collection]/apiSubscriptions/](https://api.fitbit.com/1/user/-/%5Bcollection%5D/apiSubscriptions/)
[subscription-id].json