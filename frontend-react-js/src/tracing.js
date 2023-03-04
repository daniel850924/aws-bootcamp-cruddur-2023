import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { WebTracerProvider, BatchSpanProcessor } from '@opentelemetry/sdk-trace-web';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { Resource }  from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

const exporter = new OTLPTraceExporter({
  url: "https://api.honeycomb.io/v1/traces",
  headers: {
    "x-honeycomb-team": "J2KuEMblVYSEafbWSX1EcA",
  },
});
const provider = new WebTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'frontend-react-js-browser',
  }),
});
provider.addSpanProcessor(new BatchSpanProcessor(exporter));
provider.register({
  contextManager: new ZoneContextManager()
});

import { trace, context, } from '@opentelemetry/api';

const tracer = trace.getTracer();

const rootSpan = tracer.startActiveSpan('document_load', span => {
  //start span when navigating to page
  span.setAttribute('pageUrlwindow', window.location.href);
  window.onload = (event) => {
    // ... do loading things
    // ... attach timing information
    span.end(); //once page is loaded, end the span
  };
});
