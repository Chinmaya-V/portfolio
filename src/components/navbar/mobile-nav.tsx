import React from 'react'
import IconHome from '../icons/icon-home'
import IconAbout from '../icons/icon-about'
import IconSkills from '../icons/icon-skills'
import IconProjects from '../icons/icon-projects'
import IconContact from '../icons/icon-contact'
import IconTrophy from '../icons/icon-trophy'

const MobileNav = () => {
  return (
    <div className="w-full flex gap-2 px-2 justify-evenly items-center">
      <div>
        <IconHome fill="#a855f7" />
      </div>
      <div>
        <IconAbout fill="#a855f7" />
      </div>
      <div>
        <IconSkills fill="#a855f7" />
      </div>
      <div>
        <IconProjects fill="#a855f7" />
      </div>
      <div>
        <IconContact fill="#a855f7" />
      </div>
      <div>
        <IconTrophy fill="#a855f7" />
      </div>
    </div>
  )
}

export default MobileNav
