import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { Column } from '../features/workboard/components/Column';

let Container = styled.div`
  display: flex;
`;

class Workboard extends PureComponent {
  state = {
    tasks: {
      task1: { id: 'task1', content: 'something' },
      task2: { id: 'task2', content: 'something else' },
      task3: { id: 'task3', content: 'something new' },
      task4: { id: 'task4', content: 'something else new' },
      task5: { id: 'task5', content: 'something ?' },
      task6: { id: 'task6', content: 'something else ?' }
    },
    columns: {
      column1: {
        id: 'column1',
        title: 'Todo',
        taskIds: ['task1', 'task2', 'task5', 'task6']
      },
      column2: {
        id: 'column2',
        title: 'In Progress',
        taskIds: ['task3', 'task4']
      },
      column3: { id: 'column3', title: 'Done', taskIds: [] }
    },
    columnOrder: ['column1', 'column2', 'column3']
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

  onDragStart = () => {
    document.body.style.color = 'lightgray';
    document.body.style.transition = 'background-color 0.2s ease';
  };

  onDragUpdate = update => {
    let { destination } = update;
    let opacity = destination
      ? destination.index / Object.keys(this.state.tasks).length
      : 0;

    document.body.style.backgroundColor = `rgba(283, 181, 287, ${opacity})`;
  };

  onDragEnd = result => {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = `inherit`;

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

    // where the drag starts
    let start = this.state.columns[source.droppableId];
    // where teh drag ends
    let finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      // make a copy so you don't mutate state
      let newTaskIds = Array.from(start.taskIds);
      // remove the source index from teh copy
      newTaskIds.splice(source.index, 1);
      // then add the destination to the copy
      newTaskIds.splice(destination.index, 0, draggableId);

      let newColumn = { ...start, taskIds: newTaskIds };

      this.setState(state => ({
        ...state,
        columns: { ...state.columns, [newColumn.id]: newColumn }
      }));
      return;
    }

    // moving from one list to another
    let startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    let newStart = { ...start, taskIds: startTaskIds };
    let finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    let newFinish = { ...finish, taskIds: finishTaskIds };

    this.setState(state => ({
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }));
  };

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
      >
        <Container>
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
        </Container>
      </DragDropContext>
    );
  }
}

export default Workboard;
