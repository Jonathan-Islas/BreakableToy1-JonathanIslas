package com.example.breakabletoy1.controllers;
import com.example.breakabletoy1.model.ToDo;

import jakarta.annotation.PostConstruct;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:8080")
// @CrossOrigin(origins = "*")
public class ToDoController {
    private HashMap<String, ToDo> todos = new HashMap<>();
    private int currentId = 1;

    @PostConstruct
    public void init() {
        todos.put("some", new ToDo("some", "once told me", "2026", false, 0,
         2, 121112121));
        todos.put("body", new ToDo("body", "once told me", "2027", false, 0,
         1, 121112121));
    }

    @GetMapping
    public List<ToDo> getAllTodos() {
        List<ToDo> toDoList = new ArrayList<ToDo>(todos.values()); 
        return toDoList;
    }

    @PostMapping
    public ToDo createTodo(@RequestBody ToDo todo) {
        todos.put(todo.getId(),todo);
        return todo;
    }

    @DeleteMapping("/{id}")
    public String deleteToDo(@PathVariable String id) {
        todos.remove(id);
        return "Todo " + id + "deleted.";
    }

    @PatchMapping("/{id}/done")
    public void updateCompletionStatus(
        @PathVariable String id,
        @RequestBody HashMap<String, Boolean> update
    ) {
        if (todos.containsKey(id)) {
            todos.get(id).setIsFinished(update.get("isFinished"));
        }
    }
    
    @PutMapping("/{id}")
    public void updateToDo (
        @PathVariable String id,
        @RequestBody HashMap<String, ToDo> update
    ) {
        if (todos.containsKey(id)) {
            todos.put(id, update.get("toDo"));
        }
    }
    @GetMapping("/filter")
public List<ToDo> getFilteredTodos(
        @RequestParam(required = false) String text,
        @RequestParam(required = false) Integer priority,
        @RequestParam(required = false) Boolean isFinished) {
    
    List<ToDo> filteredTodos = new ArrayList<>(todos.values());

    if (text != null && !text.isEmpty()) {
        filteredTodos = filteredTodos.stream()
                .filter(todo -> todo.getText().toLowerCase().contains(text.toLowerCase()))
                .collect(Collectors.toList());
    }

    if (priority != null) {
        filteredTodos = filteredTodos.stream()
                .filter(todo -> todo.getPriority() == priority)
                .collect(Collectors.toList());
    }

    if (isFinished != null) {
        filteredTodos = filteredTodos.stream()
                .filter(todo -> todo.getIsFinished() == isFinished)
                .collect(Collectors.toList());
    }
    System.out.println(filteredTodos);
    return filteredTodos;
}

}
