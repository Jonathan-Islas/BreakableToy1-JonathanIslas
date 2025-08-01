package com.example.breakabletoy1.controllers;
import com.example.breakabletoy1.model.ToDo;

import jakarta.annotation.PostConstruct;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:8080")
public class ToDoController {
    private List<ToDo> todos = new ArrayList<>();
    private int currentId = 1;

    @PostConstruct
    public void init() {
        todos.add(new ToDo("some", "body once told me", 1212121212, false, 121212,
         2, 121112121));
        todos.add(new ToDo("body", "body once told me", 1212121212, false, 121212,
         2, 121112121));
    }

    @GetMapping
    public List<ToDo> getAllTodos() {
        return todos;
    }

    @PostMapping
    public ToDo createTodo(@RequestBody ToDo todo) {
        System.out.println(todo);
        todo.setId(String.valueOf(currentId++));
        todo.setCreatedDate(System.currentTimeMillis());
        todos.add(todo);
        return todo;
    }
}
