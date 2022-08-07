import * as React from 'react';
import {
  List, Box,
  Divider, Typography
} from '@mui/material';
import { Row } from './Row';
import { useDispatch } from 'react-redux';
import { setSelectedNode } from "../../features/graph/graphSlice";
import { openProfile } from '../../features/window/windowSlice';

export default function Results({ users }) {
  const dispatch = useDispatch();
  return (
    <Box sx={{
      borderRadius: 5, padding: 1, backgroundColor: "#ffffff",
      position: "absolute", left: 32, right: 32, bottom: 32, zIndex: 10, // maxHeight: '50%', overflowY: 'scroll'
    }}>
      <Box sx={{maxHeight: window.innerHeight / 2, overflowY: 'scroll'}}>
      {(users.length === 0) ? <Typography
        sx={{ textAlign: 'center', marginTop: 1, marginBottom: 1 }}
      >Ничего не найдено ;( </Typography> :
          <List sx={{ width: '100%',  marginTop: 2 }}>
            {users.map((user, i) => <>
              <Row key={i} name={user.name} about={user.about} handleClick={() => {
                dispatch(openProfile());
                dispatch(setSelectedNode(user))
              }} />
              {(users.length - i > 1) && <Divider variant="inset" component="li" />}
            </>)}
          </List>
      }
      </Box>
    </Box>
  );
}

