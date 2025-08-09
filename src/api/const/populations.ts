// Homepage populations
export const homepagePopulation = {
    hero: {
        populate: ["cta"],
    },
    about: {
        populate: ["title", "image"],
    },
    services: {
        populate: {
            title: true,
            services: {
                populate: ["link", "icon"]
            }
        }
    },
    why_us: {
        populate: ["title"],
    },
    clients_partners: {
        populate: {
            partners_section: {
                populate: {
                    title: true,
                    partners: {
                        populate: ["image"]
                    }
                }
            },
            testimonials_section: {
                populate: {
                    title: true,
                    testimonials: {
                        populate: ["image", "user"]
                    },
                    form: true
                }
            }
        }
    },
    newest_articles: {
        populate: {
            title: true,
            categories: {
                populate: ["thumbnail"]
            },
            articles: {
                populate: ["image", "article_category"]
            }
        }
    },
    contact: {
        populate: {
            title: true,
            contact_info: true,
            form: {
                populate: {
                    name: true,
                    email: true,
                    country: true,
                    message: true,
                    service: {
                        populate: {
                            chooices: true
                        }
                    },
                }
            },
        }
    }
};

// Cars Page populations
export const carsPagePopulation = {
    categories: true,
    filters: {
        populate: {
            brands: true,
            models: true,
            fuel_types: true
        }
    },
    services_section: {
        populate: {
            services: {
                populate: ["service_icon"]
            },
            contact_section: {
                populate: {
                    form: {
                        populate: {
                            destination: true,
                            phone: true,
                            email: true,
                            whatsapp: true,
                            budget: {
                                populate: ['chooices']
                            },
                            car_type: {
                                populate: ['chooices']
                            },
                        }
                    }
                }
            }
        },
    }
};

// E-commerce Page populations
export const eCommercePopulation = {
    services: {
        populate: ["service_icon"]
    },
    cta: {
        populate: ["link"]
    },
    future_projects_section: {
        populate: {
            projects: {
                populate: ["images", "features"]
            }
        }
    },
    video_section: {
        populate: ["thumbnail", "video"]
    },
    contact_section: {
        populate: {
            title: true,
            form: {
                populate: {
                    name: true,
                    email: true,
                    phone: true,
                    requirements: true,
                    budget: {
                        populate: {
                            chooices: true
                        }
                    },
                    business_type: {
                        populate: {
                            chooices: true
                        }
                    },
                }
            }
        }
    }
};

// IT Page populations
export const itPopulation = {
    footer_cta_link: true,
    services: {
        populate: ["icon"]
    },
    technologies: {
        populate: ["icon"]
    },
    projects: {
        populate: {
            project: {
                populate: ["image", "features", "technologies", "screenshots"]
            }
        }
    }
};

// Terms Page populations
export const termPopulation = {
    terms_of_service: {
        populate: ["sections"]
    },
    privacy_policy: {
        populate: ["sections"]
    }
};

// Article populations
export const articlePopulation = {
    image: true,
    article_category: {
        populate: ["thumbnail"]
    }
};

export const articlesPopulation = {
    image: true,
    article_category: {
        populate: ["thumbnail"]
    }
};

// Article Category populations
export const articleCategoryPopulation = {
    thumbnail: true,
    articles: {
        populate: ["image"]
    }
};

export const articleCategoriesPopulation = {
    thumbnail: true,
    articles: {
        populate: ["image"]
    }
};

// Car populations
export const carPopulation = {
    brand: true,
    fuel_type: true,
    model: true,
    images: true,
    thumbnail: true,
    safety_features: true,
    features: true,
};

export const carsPopulation = {
    brand: true,
    fuel_type: true,
    model: true,
    images: true,
    thumbnail: true
};

// Car Brand populations
export const carBrandPopulation = {
    cars: {
        populate: ["thumbnail", "model", "fuel_type"]
    }
};

export const carBrandsPopulation = {
    cars: {
        populate: ["thumbnail", "model", "fuel_type"]
    }
};

// Car Fuel Type populations
export const carFuelTypePopulation = {
    cars: {
        populate: ["thumbnail", "brand", "model"]
    }
};

export const carFuelTypesPopulation = {
    cars: {
        populate: ["thumbnail", "brand", "model"]
    }
};

// Car Model populations
export const carModelPopulation = {
    cars: {
        populate: ["thumbnail", "brand", "fuel_type"]
    }
};

export const carModelsPopulation = {
    cars: {
        populate: ["thumbnail", "brand", "fuel_type"]
    }
};

// Project populations
export const projectPopulation = {
    image: true,
    features: true,
    technologies: true,
    screenshots: true
};

export const projectsPopulation = {
    image: true,
    features: true,
    technologies: true,
    screenshots: true
};

// E-commerce Future Project populations
export const eCommerceFutureProjectPopulation = {
    features: true,
    images: true
};

export const eCommerceFutureProjectsPopulation = {
    features: true,
    images: true
};

// Testimonial populations
export const testimonialPopulation = {
    image: true,
    user: true
};

export const testimonialsPopulation = {
    image: true,
    user: true
};

// Common component populations for reuse
export const commonPopulations = {
    // Hero section
    hero: {
        populate: ["cta"]
    },

    // About section
    about: {
        populate: ["title", "image"]
    },

    // Services section
    services: {
        populate: {
            title: true,
            services: {
                populate: ["link"]
            }
        }
    },

    // Why us section
    whyUs: {
        populate: ["title"]
    },

    // Partners section
    partnersSection: {
        populate: {
            title: true,
            partners: {
                populate: ["image"]
            }
        }
    },

    // Testimonials section
    testimonialsSection: {
        populate: {
            title: true,
            testimonials: {
                populate: ["image", "user"]
            },
            form: true
        }
    },

    // Articles section
    articlesSection: {
        populate: {
            title: true,
            categories: {
                populate: ["thumbnail"]
            },
            articles: {
                populate: ["image", "article_category"]
            }
        }
    },

    // Contact section
    contactSection: {
        populate: {
            title: true,
            form: {
                populate: {
                    name: true,
                    email: true,
                    country: true,
                    message: true,
                    budget: {
                        populate: {
                            chooices: true
                        }
                    },
                    service: {
                        populate: {
                            chooices: true
                        }
                    },
                }
            }
        }
    },

    // CTA section
    cta: {
        populate: ["link"]
    },

    // Video section
    video: {
        populate: ["thumbnail", "video"]
    },

    // Filters section
    filters: {
        populate: {
            brands: true,
            models: true,
            fuel_types: true
        }
    },

    // Terms of service section
    termsOfService: {
        populate: ["sections"]
    }
};

// Deep population presets for complex queries
export const deepPopulations = {
    // Full homepage with all nested relations
    homepageFull: {
        populate: {
            hero: {
                populate: ["cta"]
            },
            about: {
                populate: ["title", "image"]
            },
            services: {
                populate: {
                    title: true,
                    services: {
                        populate: ["link"]
                    }
                }
            },
            why_us: {
                populate: ["title"]
            },
            clients_partners: {
                populate: {
                    partners_section: {
                        populate: {
                            title: true,
                            partners: {
                                populate: ["image"]
                            }
                        }
                    },
                    testimonials_section: {
                        populate: {
                            title: true,
                            testimonials: {
                                populate: ["image", "user"]
                            },
                            form: true
                        }
                    }
                }
            },
            newest_articles: {
                populate: {
                    title: true,
                    categories: {
                        populate: ["thumbnail"]
                    },
                    articles: {
                        populate: ["image", "article_category"]
                    }
                }
            },
            contact: {
                populate: {
                    title: true,
                    form: {
                        populate: {
                            name: true,
                            email: true,
                            country: true,
                            message: true,
                            budget: {
                                populate: {
                                    chooices: true
                                }
                            },
                            service: {
                                populate: {
                                    chooices: true
                                }
                            },
                        }
                    }
                }
            }
        }
    },

    // Full car with all relations
    carFull: {
        populate: {
            brand: true,
            fuel_type: true,
            model: true,
            images: true,
            thumbnail: true
        }
    },

    // Full article with all relations
    articleFull: {
        populate: {
            image: true,
            article_category: {
                populate: ["thumbnail", "articles"]
            }
        }
    },

    // Full project with all relations
    projectFull: {
        populate: {
            image: true,
            features: true,
            technologies: true,
            screenshots: true
        }
    },

    // Full testimonial with all relations
    testimonialFull: {
        populate: {
            image: true,
            user: {
                populate: ["avatar"]
            }
        }
    }
};

// Minimal populations for performance-critical queries
export const minimalPopulations = {
    // Basic article info
    articleMinimal: {
        populate: ["image"]
    },

    // Basic car info
    carMinimal: {
        populate: ["thumbnail", "brand"]
    },

    // Basic project info
    projectMinimal: {
        populate: ["image"]
    },

    // Basic testimonial info
    testimonialMinimal: {
        populate: ["image"]
    },

    // Basic category info
    categoryMinimal: {
        populate: ["thumbnail"]
    }
};

export const AiChatbotPopulation = {
    suggested_questions: true
}


// Export all populations as a single object for easy access
export const populations = {
    // Single types
    homepage: homepagePopulation,
    carsPage: carsPagePopulation,
    eCommerce: eCommercePopulation,
    it: itPopulation,
    term: termPopulation,

    // Collection types - single item
    article: articlePopulation,
    articleCategory: articleCategoryPopulation,
    car: carPopulation,
    carBrand: carBrandPopulation,
    carFuelType: carFuelTypePopulation,
    carModel: carModelPopulation,
    project: projectPopulation,
    eCommerceFutureProject: eCommerceFutureProjectPopulation,
    testimonial: testimonialPopulation,

    // Collection types - multiple items
    articles: articlesPopulation,
    articleCategories: articleCategoriesPopulation,
    cars: carsPopulation,
    carBrands: carBrandsPopulation,
    carFuelTypes: carFuelTypesPopulation,
    carModels: carModelsPopulation,
    projects: projectsPopulation,
    eCommerceFutureProjects: eCommerceFutureProjectsPopulation,
    testimonials: testimonialsPopulation,

    // Common components
    common: commonPopulations,

    // Deep populations
    deep: deepPopulations,

    // Minimal populations
    minimal: minimalPopulations
};

// Helper function to get population by content type
export const getPopulation = (contentType: string, variant: 'default' | 'deep' | 'minimal' = 'default') => {
    if (variant === 'deep' && deepPopulations[`${contentType}Full` as keyof typeof deepPopulations]) {
        return deepPopulations[`${contentType}Full` as keyof typeof deepPopulations];
    }

    if (variant === 'minimal' && minimalPopulations[`${contentType}Minimal` as keyof typeof minimalPopulations]) {
        return minimalPopulations[`${contentType}Minimal` as keyof typeof minimalPopulations];
    }

    return populations[contentType as keyof typeof populations] || {};
};

// Type-safe population getter
export type ContentType = keyof typeof populations;
export type PopulationVariant = 'default' | 'deep' | 'minimal';

export const getTypedPopulation = <T extends ContentType>(
    contentType: T,
    variant: PopulationVariant = 'default'
) => {
    return getPopulation(contentType, variant);
};


/**
 * Recursively builds Strapi populate query parameters
 */
export function buildStrapiPopulateParams(
    populateObj: Record<string, any>,
    prefix: string = 'populate'
): URLSearchParams {
    const params = new URLSearchParams();

    for (const key in populateObj) {
        const value = populateObj[key];

        if (value === true) {
            // populate[field]=true
            params.append(`${prefix}[${key}]`, 'true');
        } else if (Array.isArray(value?.populate)) {
            // populate[field][populate][subfield]=true for each subfield
            value.populate.forEach((subField: string) => {
                params.append(`${prefix}[${key}][populate][${subField}]`, 'true');
            });
        } else if (typeof value?.populate === 'object') {
            // Recursive nested populate
            const nested = buildStrapiPopulateParams(value.populate, `${prefix}[${key}][populate]`);
            nested.forEach((v, k) => params.append(k, v));
        } else if (value?.populate === true) {
            // populate[field][populate]=true
            params.append(`${prefix}[${key}][populate]`, 'true');
        } else if (value === undefined || value === null) {
            // ignore
        } else {
            // fallback
            params.append(`${prefix}[${key}]`, 'true');
        }
    }

    return params;
}
