# http-messages-recap-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  A service requester that request content or services from a server.
- What is a server?
  A server that share their resources with the client
- Which HTTP method does a browser issue to a web server when you visit a URL?
  HTTP method GET
- What is on the first line of an HTTP **request** message?
  An HTTP method (GET, PUT, POST, HEAD, OPTIONS), a request target (usually a url or the absolute path of the protocol, port, and domain usually characterized by the request content.), and the HTTP version (which defines the structure of the remaining message, acting as an indicator of the expected version to use for the response.)
- What is on the first line of an HTTP **response** message?
  The protocal version, a status code (404, 200, 302), and a status text (a brief purely informatinal, text description of the status code to help a human understand the HTTP mesasage.)
- What are HTTP headers?
  Lets the client and the server pass additional information with an HTTP request or response
- Is a body required for a valid HTTP message?
  It is not

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
