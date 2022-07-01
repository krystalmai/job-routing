import React from 'react'
import {Chip, Stack} from '@mui/material'
function SkillStack({skills}) {
  return (
    <Stack direction='row' spacing={0.5} justifyContent='center' my={0.5}>
      {skills.slice(0,4).map((skill, index) => (
        <Chip key={index} label={skill} color="error" size="small" sx={ {p: 0, fontSize: 10} } />
      ))}
  </Stack>
  )
}

export default SkillStack
