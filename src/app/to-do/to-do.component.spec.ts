import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { ToDoComponent } from './to-do.component';

describe('ToDoComponent', () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoComponent],
      imports: [FormsModule], // Import FormsModule for ngModel
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a task to the list', () => {
    // Set the input value
    component.text = 'Test Task';
    // Call the addtask method
    component.addtask();
    // Check if the task is added to the list
    expect(component.lists).toContain('Test Task');
    // Check if the input is cleared
    expect(component.text).toBe('');
  });

  it('should not add an empty task', () => {
    // Set the input value to an empty string
    component.text = '   ';
    // Call the addtask method
    component.addtask();
    // Check if the list remains unchanged
    expect(component.lists.length).toBe(0);
  });

  it('should delete a task from the list', () => {
    // Add a task to the list
    component.lists = ['Task 1', 'Task 2', 'Task 3'];
    // Delete the task at index 1
    component.delete(1);
    // Check if the task is removed
    expect(component.lists).toEqual(['Task 1', 'Task 3']);
  });

  it('should handle delete when the list is empty', () => {
    // Set the list to empty
    component.lists = [];
    // Try to delete a task
    component.delete(0);
    // Check if the list remains empty
    expect(component.lists.length).toBe(0);
  });
});