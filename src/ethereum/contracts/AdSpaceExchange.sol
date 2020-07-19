pragma solidity >=0.4.22 <0.7.0;

contract AdSpaceExchange {
    struct Website {
        string siteURL;
        address publisher;      
        address adSpaceOwner;
        string creativeURL;
        bool forSale;
        uint price;
    }
    
    uint numbSites;
    mapping(string => uint) siteIndexMapping;
    Website[] sites;
    
    constructor() public {
        numbSites = 0;
    }
    
    
    function addPublisherURL(string calldata siteURL, uint price) external {
        Website memory site = Website({
            siteURL: siteURL,
            publisher: msg.sender,
            adSpaceOwner: msg.sender,
            creativeURL: "",
            forSale: true,
            price: price
        });
        
        sites.push(site);
        siteIndexMapping[siteURL] = numbSites;
        numbSites++;
    }
    
    function buyAdSpace(string calldata siteURL, uint amountPaid) external {
        uint siteIndex = siteIndexMapping[siteURL];
        Website storage site = sites[siteIndex];
        
        require(site.forSale == true);
        require(amountPaid >= site.price);
        
        site.adSpaceOwner = msg.sender;
        site.forSale = false;
    }
    
    //when is the creative URL being generated?
    function uploadCreative(string calldata siteURL, string calldata creativeURL) external {
        uint siteIndex = siteIndexMapping[siteURL];
        Website storage site = sites[siteIndex];
        
        require(msg.sender == site.adSpaceOwner);
        
        site.creativeURL = creativeURL;
    }
    
    function sellAdSpace(string calldata siteURL, uint price) external {
        uint siteIndex = siteIndexMapping[siteURL];
        Website storage site = sites[siteIndex];
        
        require(msg.sender == site.adSpaceOwner);
        
        site.forSale = true;
        site.price = price;
    }
    
    function displaySiteInfo(string memory siteURL) public view returns (address, address, string memory, bool, uint) {
        uint siteIndex = siteIndexMapping[siteURL];
        Website storage site = sites[siteIndex];
        
        return (
            site.publisher,
            site.adSpaceOwner,
            site.creativeURL,
            site.forSale,
            site.price
        );
    }
    
    function returnSiteName(uint index) external view returns (string memory) {
        return sites[index].siteURL;
    }
}