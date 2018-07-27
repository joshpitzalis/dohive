import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { Column } from '../features/workboard/components/Column';

class Workboard extends PureComponent {
  state = {
    tasks: {
      task1: { id: 'task1', content: 'something' },
      task2: { id: 'task2', content: 'something else' }
    },
    columns: {
      column1: { id: 'column1', title: 'todo', taskIds: ['task1', 'task2'] }
    },
    columnOrder: ['column1']
  };

  add = columnId => {
    let tasks = { ...this.state.tasks };
    let id = +Date.now();
    tasks[id] = { id, content: 'New Task' };
    let columns = { ...this.state.columns };
    columns[columnId].taskIds = [...columns[columnId].taskIds, id];
    this.setState(state => ({
      tasks,
      columns
    }));
  };

  onDragEnd = result => {
    let { destination, source, draggableId } = result;

    // if they didn't drag it anywhere
    if (!destination) {
      return;
    }

    // if they dropped it where they started
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let column = this.state.columns[source.droppableId];
    console.log('column', column);

    // make a copy so you don't mutate state
    let newTaskIds = Array.from(column.taskIds);
    // remove the source index from teh copy
    newTaskIds.splice(source.index, 1);
    // then add the destination to the copy
    newTaskIds.splice(destination.index, 0, draggableId);

    let newColumn = { ...column, taskIds: newTaskIds };

    this.setState(state => ({
      ...state,
      columns: { ...state.columns, [newColumn.id]: newColumn }
    }));
  };

  render() {
    return (
      <div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.columnOrder.map(columnId => {
            let column = this.state.columns[columnId];
            let tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks}
                add={this.add}
              />
            );
          })}
        </DragDropContext>
      </div>
    );
  }
}

export default Workboard;
