Open `app/_helpers/auth.interceptor.js`, modify the code to work with **x-access-token** like this:
```js
...

// const TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end
const TOKEN_HEADER_KEY = 'x-access-token';   // for Node.js Express back-end

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  ...

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    ...
    if (token != null) {
      // for Spring Boot back-end
      // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });

      // for Node.js Express back-end
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
    }
    return next.handle(authReq);
}
}

...
```

Run `ng serve --port 8081` for a dev server. Navigate to `http://localhost:8081/`.

ng-swagger-gen -i http://localhost:8080/v2/api-docs

For Adnroid 1 - npm install -- save @capacitor/core @capacitor/cli 2 - open file angular.json and change from  "
outputPath" : "dist/{{nameApp}}" to be
"outputPath" : "www"
3 - ng b --prod 4 - npx cap init 5 - npx cap add android 6 - npx cap copy android 7 -npx cap open android
