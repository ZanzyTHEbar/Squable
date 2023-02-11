import { onMount, Suspense, lazy } from 'solid-js'
import { handleTitlebar, handleAppBoot } from '@utils/hooks/app'

//const AppRoutes = lazy(() => import('@routes/Routes'))
//const ModalMenu = lazy(() => import('@components/Modal'))
//const ToastNotificationWindow = lazy(() => import('@components/Notifications'))
const ContextMenu = lazy(() => import('@components/ContextMenu'))
const Sidebar = lazy(() => import('@components/Sidebar'))

const ExampleMenu = () => {
    return (
        <div>
            <h1 class="text-lg">Sub Menu</h1>
            <hr class="divider" />
            <label class="context-menu-labels" for="test-button">
                Test Button
            </label>
            <button
                id="test-button"
                onClick={() => {
                    console.log('clicked')
                }}>
                Test
            </button>
            <hr class="divider" />
        </div>
    )
}

const App = () => {
    const ref = document.getElementById('titlebar') // TODO: this is a hack, need to figure out how to get the ref to the bound element
    onMount(() => {
        handleTitlebar()
        handleAppBoot()
    })
    return (
        <div class="App overflow-y-auto items-center">
            <Suspense>
                {/* <AppRoutes /> */}
                <ContextMenu ref={ref} name="test">
                    <ExampleMenu />
                </ContextMenu>
                {/* <ModalMenu>
                </ModalMenu>
                <ToastNotificationWindow /> */}
            </Suspense>
        </div>
    )
}

export default App
