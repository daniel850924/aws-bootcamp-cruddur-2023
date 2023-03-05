# Week 2 — Distributed Tracing

## Required Homework

- [Instrument Honeycomb with OTEL](#instrument-honeycomb-with-otel)
- [Instrument AWS X-Ray](#instrument-aws-x-ray)
- [Instrument AWS X-Ray Subsegments](#instrument-aws-x-ray)
- [Configure custom logger to send to CloudWatch Logs](#configure-custom-logger-to-send-to-cloudwatch-logs)
- [Integrate Rollbar and capture and error](#integrate-rollbar-for-error-logging)

## Homework Challenges

- [Instrument Honeycomb for the frontend-application to observe network latency between frontend and backend](#instrument-honeycomb-for-the-frontend-application)
- [Add custom instrumentation to Honeycomb to add more attributes eg. UserId, Add a custom span](#add-custom-instrumentation-to-honeycomb-to-add-more-attributes)
- [Run custom queries in Honeycomb and save them later eg. Latency by UserID, Recent Traces](#run-custom-queries-in-honeycomb-and-save-them-later)

## Instrument Honeycomb with OTEL

- Follow the instructions as the documentation [Honeycomb Python Doc](https://docs.honeycomb.io/getting-data-in/opentelemetry/python/)

- Git Commit with the changes [Git Commit c974790](https://github.com/daniel850924/aws-bootcamp-cruddur-2023/commit/c974790bcfacef7ef2856da69aac80971b0af129)

- Honeycomb
  ![honeycomb](../assets/week2/honeycomb.png)

- Honeycomb add spans and attributes [Git Commit 0d25a43](https://github.com/daniel850924/aws-bootcamp-cruddur-2023/commit/3d08ed8005fb4f8642a43d62e718ddaeb6a61675)

- Honeycomb Span/Attributes
  ![honeycomb span](../assets/week2/honeycomb-span-attributes.png)

- Run queries to explore traces within Honeycomb.io

- Honneycomb query request with result length greater then two ![Query Error](../assets/week2/honeycomb-query-result-length.png)

- Honneycomb query request with error ![Query Error](../assets/week2/honneycomb-query-error.png)

- Honneycomb query request with error detail ![Query Error Detail](../assets/week2/honneycomb-error-detail.png)

## Instrument AWS X-Ray

- Create X-Ray group through AWS CLI
  ![cli-create-group](../assets/week2/aws-cli-create-group.png)
  ![cli-create-group](../assets/week2/aws-console-x-ray.png)

- Create X-Ray sampling rule through AWS CLI
  ![cli-create-group](../assets/week2/aws-cli-create-rule.png)

- Configure and provision X-Ray daemon within docker-compose and send data back to X-Ray API [Git Commit e0cff6e](https://github.com/daniel850924/aws-bootcamp-cruddur-2023/commit/e0cff6e6ef87083e51a786a7fffc402a2a3672a8)

- Observe X-Ray traces within the AWS Console

![console-trace](../assets/week2/aws-xray-trace-console.png)
![console-trace-detail](../assets/week2/aws-xray-trace-detail.png)

## Configure custom logger to send to CloudWatch Logs

- Git Commit with the changes [Git Commit 4a0c0fe](https://github.com/daniel850924/aws-bootcamp-cruddur-2023/commit/4a0c0fee5ed7b02a4ecce68f52c146d78ed6769b)

![console-cloudwatch](../assets/week2/aws-cloudwatch-log.png)
![console-cloudwatch-event](../assets/week2/aws-cloudwatch-log-events.png)

## Integrate Rollbar for Error Logging

- Git Commit with the changes [Git Commit a21f7a6](https://github.com/daniel850924/aws-bootcamp-cruddur-2023/commit/a21f7a67637d41690a9bd54e2cd90032d3124118)

- Trigger an error an observe an error with Rollbar
  ![rollbar](../assets/week2/rollbar.png)
  ![rollbar-erro](../assets/week2/rollbar-error.png)

## Instrument Honeycomb for the frontend-application

- Git Commit with the changes [Git Commit 77ed84a](https://github.com/daniel850924/aws-bootcamp-cruddur-2023/commit/77ed84ac50ff75a8d701a167ce7830b8abda8ee0)

- Follow the instructions as the Honyecomb documentation [Honeycomb JavaScript Doc](https://docs.honeycomb.io/getting-data-in/opentelemetry/browser-js/)
- Follow the instructions as the Open Telemetry documentation [Open Telemetry](https://opentelemetry.io/docs/collector/getting-started/)

- The [tracing.js](../frontend-react-js/src/tracing.js) file is imported on the [index.js](../frontend-react-js/src/index.js) them every page in the frontend is now monitored.
- In Honeycomb you can identify the page through the new attribute pageUrlwindow.

## Add custom instrumentation to Honeycomb to add more attributes

- Added document_load span and the attribute pageUrlwindow
  ![Honeycomb-new-span-attributes](../assets/week2/Honeycomb-new-span-attributes.png)

## Run custom queries in Honeycomb and save them later

- Created custom query Notification_Latency and saved it on the board. This query searches in the last two hours for requests on the notification page and shows the time spend to load the page.
  ![Honeycomb-custom-queries-Honeycomb](../assets/week2/Honeycomb-custom-queries-Honeycomb.png)

- Running Notification_Latency custom query
  ![Honeycomb-running-custom-queries](../assets/week2/Honeycomb-running-custom-queries.png)
