import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { Task } from './Task';
import { IconButton } from 'evergreen-ui';

let Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
let Title = styled.h3`
  margin: 8px;
  display: inline;
  width: 100%;
`;
let TaskList = styled.div`
  margin: 8px;
`;

export let Column = ({ column, tasks, add }) => (
  <Container>
    <div style={{ width: '100%', margin: '8px' }}>
      <Title>{column.title}</Title>
      <IconButton
        appearance="ghost"
        marginRight={12}
        icon="add"
        style={{ display: 'inline' }}
        onClick={() => add(column.id)}
      />
    </div>
    <Droppable droppableId={column.id}>
      {provided => (
        <TaskList innerRef={provided.innerRef} {...provided.droppableProps}>
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </TaskList>
      )}
    </Droppable>
  </Container>
);
