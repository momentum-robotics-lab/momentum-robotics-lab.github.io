---
layout: publication
title: "Streaming insertion of tokens into content to protect against CSRF"
authors:

    - Jeffrey Ichnowski

authors-short:

    - J. Ichnowski

year: 2013
journal: "None"
ref: ""
doi: None
---

Methods and apparatus are provided for protecting against cross-site request forgeries (CSRFs) by requiring certain requests submitted to a computer server to include specific tokens. The requests involve modification of or access to protected data, and the tokens are inserted by a state machine into content from which the requests are initiated. For example, content that includes a form, a hyperlink, a scripted request or other control for initiating a follow-on request to the server is modified to include tokens. The state machine may scan the content in real time (eg, as it is served) to identify these controls and to insert the tokens. Using a state machine allows the content to be streamed even as it is scanned, does not require construction of a representation of the content (eg, a DOM tree), and avoids modifying any of the content other than to insert one or more tokens.
    