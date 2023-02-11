import { Link } from '@solidjs/router'
import { For, Show } from 'solid-js'
import { routes } from '@src/routes'
import { CapitalizeFirstLetter } from '@utils/utils'
import { AiFillHome } from 'solid-icons/ai'
import { IoSettingsSharp } from 'solid-icons/io'
import { OcPeople2 } from 'solid-icons/oc'

const parseNameFromPath = (path: string) => {
    const name = path.split('/')
    if (name[1] === '') return 'Chat'
    else if (name[0] === '**') return ''
    else return CapitalizeFirstLetter(name[1])
}

const returnIcon = (path: string) => {
    return (
        <div class="grid grid-flow-row auto-cols-fr xxs:pl-[50px] md:pl-[50px] lg:pl-[100px] pt-[12px] pb-[12px] rounded-[10px] mt-[20px] text-white">
            <div class="hover:bg-slate-400 pl-2 pr-2 rounded-md">
                <Show when={path === '/'}>
                    <div class="flex flex-col justify-center items-center">
                        <AiFillHome class="text-2xl" color="white" />
                        <Link href={path}>{parseNameFromPath(path)}</Link>
                    </div>
                </Show>
            </div>
            <div class="hover:bg-slate-400 pl-2 pr-2 rounded-md">
                <Show when={path === '/contacts'}>
                    <div class="flex flex-col justify-center items-center">
                        <OcPeople2 class="text-2xl" color="white" />
                        <Link href={path}>{parseNameFromPath(path)}</Link>
                    </div>
                </Show>
            </div>
            <div class="hover:bg-slate-400 pl-2 pr-2 rounded-md">
                <Show when={path === '/settings'}>
                    <div class="flex flex-col justify-center items-center">
                        <IoSettingsSharp class="text-2xl" color="white" />
                        <Link href={path}>{parseNameFromPath(path)}</Link>
                    </div>
                </Show>
            </div>
        </div>
    )
}

const Navbar = () => {
    return (
        <div class="footer-wrapper">
            <nav class="flex justify-around items-center">
                <For each={routes}>{(route) => <div>{returnIcon(route.path)}</div>}</For>
            </nav>
        </div>
    )
}

export default Navbar
