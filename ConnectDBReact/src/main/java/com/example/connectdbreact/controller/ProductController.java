package com.example.connectdbreact.controller;

import com.example.connectdbreact.dto.ProductDto;
import com.example.connectdbreact.model.Product;
import com.example.connectdbreact.service.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService productService;


    @GetMapping("/product/{page}/{limit}")
    public ResponseEntity<Page<Product>> getAll(@PathVariable(value = "page", required = false) Integer page,
                                                @PathVariable(value = "limit", required = false) Integer limit) {
        Pageable pageable = PageRequest.of(page, limit);
        if (this.productService.findAll(pageable).isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(this.productService.findAll(pageable), HttpStatus.OK);
    }
    @PostMapping("/product")
    public ResponseEntity<?> createProduct(@Valid @RequestBody ProductDto productDto, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            List<String> errors = bindingResult.getFieldErrors()
                    .stream()
                    .map(DefaultMessageSourceResolvable::getDefaultMessage)
                    .collect(Collectors.toList());
            return new ResponseEntity<>(errors.toString(), HttpStatus.BAD_REQUEST);
        }
        Product product = new Product();
        BeanUtils.copyProperties(productDto,product);
        productService.create(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("/product/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable(value = "id", required = false) Integer id){
        productService.update(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/product/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable(value = "id",required = false) Integer id){
        productService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/search/{name}")
    public ResponseEntity<List<Product>> searchProduct(@PathVariable(value = "name",required = false) String name){
        return new ResponseEntity<>(productService.search(name),HttpStatus.OK);
    }
}
