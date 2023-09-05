package com.example.connectdbreact.service.impl;

import com.example.connectdbreact.model.ProductType;
import com.example.connectdbreact.repository.IProductTypeRepository;
import com.example.connectdbreact.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService {
    @Autowired
    private IProductTypeRepository iProductTypeRepository;
    @Override
    public List<ProductType> findAll() {
        return iProductTypeRepository.findAll();
    }
}
