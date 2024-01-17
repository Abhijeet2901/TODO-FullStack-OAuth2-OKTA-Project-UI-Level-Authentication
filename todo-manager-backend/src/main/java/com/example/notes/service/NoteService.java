package com.example.notes.service;

import com.example.notes.aspect.annotation.NoteAnnotation;
import com.example.notes.model.Note;
import com.example.notes.repository.NoteRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class NoteService {

    private static final String NOTE_TODO_SEQUENCE = "note-todo_sequence";
    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    public Note get(Long id) {
        return noteRepository.findById(id).get();
    }

    public List<Note> getAll() {
        return noteRepository.findAll().stream().sorted((o1, o2) -> o2.getId().
                        compareTo(o1.getId())).
                collect(Collectors.toList());
    }

    @NoteAnnotation
    public Note save(Note note) {
        note.setId(sequenceGeneratorService.getNextSequenceId(NOTE_TODO_SEQUENCE));
        return noteRepository.save(note);
    }

    public Note update(Note note) {
        Note dbNote = noteRepository.findById(note.getId()).get();
        BeanUtils.copyProperties(note, dbNote);
        return noteRepository.save(dbNote);
    }

    public void deleteById(Long id) {
        noteRepository.deleteById(id);
    }
}
