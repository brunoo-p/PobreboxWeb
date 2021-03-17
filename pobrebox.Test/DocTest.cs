using System.Collections.Generic;
using Pobrebox.Model;
using Pobrebox.Repository;
using Xunit;

namespace pobrebox.Test
{
    public class DocTest
    {
        DocRepository repository = new DocRepository();

        [Fact]
        [Trait("Document", "Add")]
        public void AdicionarDocumento()
        {
            //average  
            var doc = new Document(
                idUser: 1,
                docName: "exemple.jpg",
                directory: "photos",
                isDeleted: false,
                content: "C:\\Users\\bruno\\Downloads\\github1.png"
            );
            
            //act
            bool newDocument = repository.AddDocument(doc);
            
            //assert
            Assert.NotNull(doc);
            Assert.IsType<bool>(newDocument);
            Assert.True(newDocument);
        }

        [Fact]
        [Trait("Document", "Exclude")]
        public void ExcluirDocumento()
        {
            //average
            int idImageExclude = 1;
            bool isExcluded = false;

            //act
            bool wasExcluded = repository.ExcludeDocument(idImageExclude);
            
            //assert
            Assert.IsType<bool>(wasExcluded);
            Assert.NotEqual(isExcluded, wasExcluded);
            Assert.True(wasExcluded);
        }

        [Fact]
        [Trait("Document", "GetForDirectory")]
        public void BuscarDocumentoPorDiretorio()
        {
            //average
            int idUser = 1;
            string directory = "photos";
            int quantityDoc = 2;

            //act
            List<Document> documents = repository.GetDocumentForDirectory(idUser, directory);

            //assert
            Assert.NotNull(documents);
            Assert.NotEmpty(documents);
            Assert.Equal(quantityDoc, documents.Count);
        }
    }
}