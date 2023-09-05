package com.example.connectdbreact.service;

import com.example.connectdbreact.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    List<Product> findAll();
    Page<Product> getAllProduct(String searchByName, String searchByNameType, Pageable pageable);
    Product create (Product product);
    Optional<Product> findById (Integer id);
}
