
import draw from '@/views/draw/index'
import draw_in from '@/views/draw/in'
import draw_click from '@/views/draw/click'
import draw_smoke from '@/views/draw/smoke'
import draw_result from '@/views/draw/result'
import draw_winning from '@/views/draw/winning'

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
		path: '/draw/click', //点击抽奖
		name: 'draw_click',
		component: draw_click
	},
	{
		path: '/draw/smoke', //一抽一
		name: 'draw_smoke',
		component: draw_smoke
	},
	{
		path: '/draw/result', //抽奖结果
		name: 'draw_result',
		component: draw_result
	},
	{
		path: '/draw/in', //抽奖中
		name: 'draw_in',
		component: draw_in
	},
	{
		path: '/draw/winning',//一抽十中奖结果
		name: 'draw_winning',
		component: draw_winning
	}
]

export default drawModule

