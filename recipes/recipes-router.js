const express = require('express');
const Recipes = require('./recipes-model.js')
const router = require('express').Router();

router.get('/', (req, res) => {
    Recipes.find()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "cannot retreive recipes"})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params.id;
    Recipes.findById(id)
        .then(recipe => {
            recipe
            ? res.status(200).json(recipe)
            : res.status(404).json({ error: "recipe not found"})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "cannot retreive recipe" })
        })
})

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params.id
    Recipes.findSteps(id)
        .then(steps => {
            steps.length 
            ? res.status(200).json(steps)
            : res.status(404).json({ error: "could not find steps" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "could not get steps at this time" })
        })
})

router.post('/', (req, res) => {
    const newRecipe = req.body
    Recipes.add(newRecipe)
        .then(recipe => {
            res.status(201).json(recipe)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "could not add recipe at this time" })
        })
})

router.post('/:id/instructions', (req, res) => {
    const newStep = req.body
    const { id } = req.params.id
    Recipes.findById(id)
        .then(recipe => {
            recipe
            ? Recipes.addStep(newStep, id)
                .then(step => {
                    res.status(201).json(step)
                })
            : res.status(404).json({ message: "could not find recipe" })
        })
        .catch(err => {
            res.status(500).json({ message: "cannot create new step" })
        })
})

router.put('/:id', (req, res) => {
    const { id } = req.params.id
    const changes = req.body
    Recipes.findById(id)
        .then(recipe => {
            recipe
            ? Recipes.update(changes, id)
                .then(updated => {
                    res.status(200).json(updated)
                })
            : res.status(404).json({ error: "cannot find recipe" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "cannot update recipe" })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params.id
    Recipes.remove(id)
        .then(deleted => {
            deleted
            ? res.status(200).json(deleted)
            : res.status(404).json({ error: "cannot find recipe with id" })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "cannot delete recipe" })
        })
})

module.exports = router;