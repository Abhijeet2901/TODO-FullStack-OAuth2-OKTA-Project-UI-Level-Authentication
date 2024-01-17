package com.example.notes.aspect.pointCuts;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class pointCutMethods {

    @Pointcut("@annotation(com.example.notes.aspect.annotation.NoteAnnotation)")
    public void saveNoteDataPointCut() {

    }

}
