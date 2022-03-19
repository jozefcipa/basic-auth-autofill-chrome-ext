# BasicAuth Autofill Chrome extension
> A simple Chrome extension to autofill Basic Auth credentials
> 
> *Replace annoying form*
>
> <img width="321" alt="159126188-7c253eb4-86f8-4f10-a67b-8b3223bb8639" src="https://user-images.githubusercontent.com/11503453/159126463-b01c8a0f-1cca-4c58-93c1-e0d1b06aef48.png">
> 
> *with a nice notification*
>
> <img width="335" alt="image" src="https://user-images.githubusercontent.com/11503453/159126339-5e30eea4-bbe7-459e-9296-3ff07ed0cfb8.png">

## Motivation
This simple extension is very useful when you're often accessing websites that require Basic Authentication.

Usually it's enough to fill out the authentication form once for the domain. Therefore, this extension finds application especially in situations where you **need to access many subdomains**.

It listens for the configured URL pattern and whenever the matched website requires a Basic Auth it fills and submits the form automatically.

## How to use
1. Clone the repository
1. Set Basic Auth credentials and replace the desired URL in `main.js` and `manifest.json`
1. Go to `chrome://extensions`, make sure you have *Developer mode* enabled and click on `"Load unpacked"`. Then just choose the directory and enjoy!

**Note:** This extension currently uses `Manifest v2` which will be **deprecated in 2023**, so it will need slight changes to [upgrade to v3](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/) ⚠️

### Credits
<a href="https://www.flaticon.com/free-icons/lock" title="lock icons">Lock icons created by Freepik - Flaticon</a>