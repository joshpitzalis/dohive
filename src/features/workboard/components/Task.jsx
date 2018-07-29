import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

let Content = styled.div`
  padding: 8px;
  border: 1px solid lightgrey;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: ${props =>
    props.isDragDisabled
      ? 'lightgrey'
      : props.isDragging
        ? 'lightgreen'
        : 'white'};
  display: flex;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

export let Task = ({ task, index }) => {
  let isDragDisabled = task.id === 'task1';
  return (
    <Draggable
      draggableId={task.id}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <Content
          {...provided.draggableProps}
          innerRef={provided.innerRef}
          isDragging={snapshot.isDragging}
          isDragDisabled={isDragDisabled}
          aria-roledescription="Press spacebar to lift the task"
        >
          <Handle {...provided.dragHandleProps} />
          {task.content}
        </Content>
      )}
    </Draggable>
  );
};
