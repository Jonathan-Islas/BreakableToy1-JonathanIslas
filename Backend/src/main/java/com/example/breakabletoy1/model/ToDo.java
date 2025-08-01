package com.example.breakabletoy1.model;

public class ToDo {

    private String id;
    private String text;
    private String dueDate;
    private boolean isFinished = false;
    private long finishedDate;
    private int priority;
    private long createdDate;

    // constructors
    public ToDo() {}

    public ToDo(String id, String text, String dueDate, boolean isFinished, long finishedDate, int priority, long createdDate) {
        this.id = id;
        this.text = text;
        this.dueDate = dueDate;
        this.isFinished = isFinished;
        this.finishedDate = finishedDate;
        this.priority = priority;
        this.createdDate = createdDate;
    }

    // Getters Setters
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }
    public void setText(String text) {
        this.text = text;
    }

    public String getdueDate() {
        return dueDate;
    }
    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public boolean getIsFinished() {
        return isFinished;
    }
    public void setIsFinished(Boolean isFinished) {
        this.isFinished = isFinished;
    }

    public long getFinishedDate() {
        return finishedDate;
    }
    public void setFinishedDate(long finishedDate) {
        this.finishedDate = finishedDate;
    }

    public int getPriority() {
        return priority;
    }
    public void setPriority(int priority) {
        this.priority = priority;
    }

    public long getCreatedDate() {
        return createdDate;
    }
    public void setCreatedDate(long createdDate) {
        this.createdDate = createdDate;
    }

    
}
