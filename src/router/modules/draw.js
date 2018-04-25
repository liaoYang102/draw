
import draw from '@/views/draw/index'
import draw_in from '@/views/draw/in'

const drawModule = [
	{
	  path: '/draw',//抽奖系统首页
	  name:'draw',
	  component: draw
	},
	{
	  path: '/draw/index',//抽奖系统首页
	  name:'draw',
	  component: draw
	},
	{
		path: '/draw/in', //
		name: 'draw_in',
		component: draw_in
	}
]

export default drawModule

