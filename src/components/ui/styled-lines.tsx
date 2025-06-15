import React from 'react'
import IconStar from '../icons/icon-star'

const StyledLines = () => {
	return (
		<div className="w-full flex items-center gap-1">
			<IconStar size="48px" secondaryFill="#7e22ce" />
			<div className="h-0 flex-1 border border-purple-500" />
			<div className="size-4 border rounded-full bg-purple-400  border-purple-500" />
			<div className="size-8 border-4 rounded-full  border-purple-500" />
			<div className="size-4 border rounded-full bg-purple-400 border-purple-500" />
			<div className="h-0 flex-1 border  border-purple-500" />
			<IconStar size="48px" secondaryFill="#7e22ce" />
		</div>
	)
}

export default StyledLines
