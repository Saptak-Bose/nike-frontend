type Products = {
  data: [Product];
  meta: [
    {
      pagination: {
        page: number;
        pageCount: number;
        pageSize: number;
        total: number;
      };
    }
  ];
};

type Product = {
  id: number;
  attributes: {
    name: string;
    subtitle: string;
    price: number;
    description: string;
    size: {
      data: [
        {
          size: string;
          enabled: boolean;
        }
      ];
    };
    original_price: number;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: [
        {
          id: number;
          attributes: {
            name: string;
            alternativeText: string | undefined | null;
            caption: string | undefined | null;
            width: number;
            height: number;
            formats: {
              large: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: string | undefined | null;
                size: number;
                width: number;
                height: number;
                provider_metadata: {
                  public_id: string;
                  resource_type: string;
                };
              };
              small: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: string | undefined | null;
                size: number;
                width: number;
                height: number;
                provider_metadata: {
                  public_id: string;
                  resource_type: string;
                };
              };
              medium: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: string | undefined | null;
                size: number;
                width: number;
                height: number;
                provider_metadata: {
                  public_id: string;
                  resource_type: string;
                };
              };
              thumbnail: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: string | undefined | null;
                size: number;
                width: number;
                height: number;
                provider_metadata: {
                  public_id: string;
                  resource_type: string;
                };
              };
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: string | undefined | null;
            provider: string;
            provider_metadata: {
              public_id: string;
              resource_type: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        }
      ];
    };
    thumbnail: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | undefined | null;
          caption: string | undefined | null;
          width: number;
          height: number;
          formats: {
            large: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | undefined | null;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
            small: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | undefined | null;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
            medium: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | undefined | null;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
            thumbnail: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | undefined | null;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | undefined | null;
          provider: string;
          provider_metadata: {
            public_id: string;
            resource_type: string;
          };
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    categories: {
      data: [
        {
          id: number;
          attributes: {
            name: string;
            slug: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
          };
        }
      ];
    };
  };
};

type Categories = {
  data: [Category];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
};

type Category = {
  id: number;
  attributes: {
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    products: {
      data: [
        {
          id: number;
          attributes: {
            name: string;
            subtitle: string;
            price: number;
            description: string;
            size: {
              data: [
                {
                  size: string;
                  enabled: boolean;
                }
              ];
            };
            original_price: number;
            slug: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
          };
        }
      ];
    };
  };
};
