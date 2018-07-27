import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

let Content = styled.div`
  padding: 8px;
  border: 1px solid lightgrey;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: white;
`;
export let Task = ({ task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {provided => (
      <Content
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        innerRef={provided.innerRef}
      >
        {task.content}
      </Content>
    )}
  </Draggable>
);
