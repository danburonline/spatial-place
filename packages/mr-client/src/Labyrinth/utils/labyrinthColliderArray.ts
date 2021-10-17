import { MathUtils } from 'three'

import type { ColliderProps } from '../../Collider/Collider'

type LabyrinthColliderArray = [
  ColliderProps & {
    id: number
  }
]

const labyrinthColliderArray: LabyrinthColliderArray = [
  {
    id: 1,
    size: [0.1, 3, 12.076],
    position: [-2.959, 1.0, -2.04],
    scale: [0, 0, 0],
    rotation: [0, MathUtils.degToRad(0.6), 0],
    color: '#fff'
  }
]

export default labyrinthColliderArray
