package com.example.notes.aspect;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class AspectLogging {
    @Before("com.example.notes.aspect.pointCuts.pointCutMethods.saveNoteDataPointCut()")
    public void logBefore() {
        System.out.println("Before logging happening!!");
    }

    @After("com.example.notes.aspect.pointCuts.pointCutMethods.saveNoteDataPointCut()")
    public void logAfter() {
        System.out.println("After logging happening!!");
    }
}
