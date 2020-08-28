# Top50

## SITE
    https://top50reddit.herokuapp.com/

## NOTES

###  The developed features are:

    - Responsive design
    - Dismiss All Button (remove all posts. Animations required)


 Given the amount of time requested for develompent, only these these features where built.  These are also the minimun features that make the app valuable to a user (it shows the latest top50 and lets you refresh by dismissing the current items)


### Important decisions

- Using env vars in fontend to reference backend
- Abstracting code of Button component, so it can be reused everywhere.
- Giving feedback to the user with a loading indicator.
- Allowing users to reload posts so the app is usable even after dismissing all.
- Using a Service in rails, to abstract logic of callin reddit's api.
- Namespacing the api (api/v1)
- Using Redux in the frontend as a tool for state management.
- Using blueprint as a CSS Framework.

