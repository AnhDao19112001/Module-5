package com.example.connectdbreact.controller;
import com.example.connectdbreact.model.ProductType;
import com.example.connectdbreact.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ProductTypeController {
    @Autowired
    private IProductTypeService productTypeService;

    @GetMapping("/type")
    public ResponseEntity<List<ProductType>> getAll() {
        return new ResponseEntity<>(this.productTypeService.findAll(),HttpStatus.OK);
    }
}
