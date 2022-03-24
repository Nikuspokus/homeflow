export default function ({ app, route, redirect }) {
  if (route.path !== '/auth/signin') {
    //we are on protected route
    if (!app.$fire.auth.currentUser) {
      //take them to sign in page
      return redirect('/auth/signin')
    }
  } else if (route.path === '/auth/signin') {
    if (!app.$fire.auth.currentUser) {
      //leave them on the signin page
    } else {
      return redirect('/')
    }
  }
}
