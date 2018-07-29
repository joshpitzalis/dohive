import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { Task } from './Task';
import { IconButton } from 'evergreen-ui';

class InnerList extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) {
      return false;
    }
    return true;
  }

  render() {
    return this.props.tasks.map((task, index) => (
      <Task key={task.id} task={task} index={index} />
    ));
  }
}

let Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
let Title = styled.h3`
  margin: 8px;
  display: inline;
  width: 100%;
`;
let TaskList = styled.div`
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
  flex-grow: 1;
`;

export let Column = ({ column, tasks, add, isDropDisabled, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {provided => (
        <Container {...provided.draggableProps} innerRef={provided.innerRef}>
          <div
            style={{ width: '100%', margin: '8px' }}
            {...provided.dragHandleProps}
          >
            <Title>{column.title}</Title>
            <IconButton
              appearance="ghost"
              marginRight={12}
              icon="add"
              style={{ display: 'inline' }}
              onClick={() => add(column.id)}
            />
          </div>
          <Droppable
            droppableId={column.id}
            isDropDisabled={isDropDisabled}
            type="task"
          >
            {(provided, snapshot) => (
              <TaskList
                innerRef={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks && <InnerList tasks={tasks} />}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};
