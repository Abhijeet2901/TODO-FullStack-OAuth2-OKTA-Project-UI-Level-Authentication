package com.example.notes.controller;

import com.example.notes.model.Note;
import com.example.notes.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/note")
@CrossOrigin("*")
public class NoteController {

    @Autowired
    private NoteService noteService;

    @GetMapping("/")
    public String test() {
        return "Hello World!!";
    }

    @GetMapping("/get/{id}")
    public Note getNote(@PathVariable Long id) {
        return noteService.get(id);
    }

    @GetMapping("/get/all")
    public List<Note> getAllNotes() {
        return noteService.getAll();
    }

    @PostMapping("/create")
    public Note createNote(@RequestBody Note note) {
        return noteService.save(note);
    }

    @PutMapping("/update")
    public Note updateNote(@RequestBody Note note) {
        return noteService.update(note);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteNote(@PathVariable Long id) {
        noteService.deleteById(id);
        return "Note/Todo of ID:" + id + ", deleted Successfully!!";
    }
}
