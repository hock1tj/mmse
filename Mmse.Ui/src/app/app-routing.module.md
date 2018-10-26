# Routing Module

## Usage
By default, the app template contains two routes -- login and home.  If you need to add additional routes, first import the component loaded by the new route:

`import { NewComponent } from './components/new/new.component';`

Then add the route:

`{ path: 'new', component: NewComponent }`
