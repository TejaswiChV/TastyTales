package com.food.TastyTales.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("home")
@CrossOrigin(origins = "http://localhost:5173")
public class HomeController {

    // home/websiteName
    @GetMapping("websiteName")
    public String getWebsiteName(){
        return "Tasty Tales";
    }

}
