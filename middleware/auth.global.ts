export default defineNuxtRouteMiddleware(async (to, _from) => {

    //get sesion
    const { session } = await useSession()

    const isAuthenticated: boolean = session.value?.auth ? true : false

    // try access page without authentication
    if (to.name !== 'login' && !isAuthenticated) {
        return navigateTo('/login')
    }
})
