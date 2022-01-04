import { EmojiFlags, People ,Chat ,LocalHospital,Storefront, VideoLibrary, ExpandLessOutlined} from '@material-ui/icons'
import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SidebarRow from './SidebarRow'

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src='' Icon={AccountCircleIcon} title='hsipl6969'/>
            <SidebarRow src='' Icon={LocalHospital} title='COVID-19 Informtion Center'/>
            <SidebarRow src='' Icon={EmojiFlags} title='Pages'/>
            <SidebarRow src='' Icon={People} title='Freinds'/>
            <SidebarRow src='' Icon={Chat} title='Messenger'/>
            <SidebarRow src='' Icon={Storefront} title='Marketplace'/>
            <SidebarRow src='' Icon={VideoLibrary} title='Videos'/>
            <SidebarRow src='' Icon={ExpandLessOutlined} title='more'/>
        </div>
    )
}

export default Sidebar
