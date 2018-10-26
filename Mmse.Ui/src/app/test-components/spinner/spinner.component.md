# Spinner

## What is It?
Spinner is a animated spinning circle used to show the user that content is being loaded.  

## Usage Guidelines
Spinners should only be used to show the loading of content on a page -- either the entire screen, or an individual component.  If you are trying to show progress from an api call after content is loaded -- like a file upload for instance -- a Progress Bar should be used.  Spinner has two modes -- Determinate and Indeterminate.  Indeterminate, which shows a looping animation, is fine in most cases.  Determinate shows percentage based progress.  If you're loading something that is going to take a long time -- more than 10 seconds -- consider using determinate mode.

## Additional Documentation
For additional options and documentation, see the [Angular Material documentation](https://material.angular.io/components/progress-spinner/overview).
