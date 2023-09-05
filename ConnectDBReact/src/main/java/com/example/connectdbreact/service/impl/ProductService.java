package com.example.connectdbreact.service.impl;

import com.example.connectdbreact.model.Product;
import com.example.connectdbreact.repository.IProductRepository;
import com.example.connectdbreact.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public List<Product> findAll() {
        return iProductRepository.getAll();
    }

    @Override
    public Page<Product> getAllProduct(String searchByName, String searchByNameType, Pageable pageable) {
        return iProductRepository.findAll(searchByName,searchByNameType,pageable);
    }

    @Override
    public Product create(Product product) {
        return iProductRepository.save(product);
    }

    @Override
    public Optional<Product> findById(Integer id) {
        return Optional.empty();
    }

}
