package com.example.connectdbreact.controller;

import com.example.connectdbreact.model.Product;
import com.example.connectdbreact.service.IProductService;
import com.example.connectdbreact.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("")
@RestController
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService productService;


    @GetMapping("")
    public ResponseEntity<List<Product>> getAll() {
        return new ResponseEntity<>(this.productService.findAll(), HttpStatus.OK);
    }

//    @GetMapping("/product")
//    public ResponseEntity<Page<Product>> productList(@RequestParam(value = "searchByName", defaultValue = "") String searchByName,
//                                                     @RequestParam(value = "searchByNameType", defaultValue = "") String searchByNameType,
//                                                     @PageableDefault(size = 2) Pageable pageable) {
//        Page<Product> product = productService.getAllProduct(searchByName, searchByNameType, pageable);
//        if (product.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

    @PostMapping("/add")
    public ResponseEntity<Product> createProduct(@RequestBody Product product){
        System.out.println(product);
        return new ResponseEntity<>(productService.create(product),HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateFootball(@PathVariable Integer id, @RequestBody Product product){
        Optional<Product> football1 = productService.findById(id);
        if (!football1.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        product.setId(football1.get().getId());
        return new ResponseEntity<>(productService.create(product), HttpStatus.OK);
    }
}
