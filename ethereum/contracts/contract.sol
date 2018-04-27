pragma solidity ^0.4.19;
pragma experimental ABIEncoderV2;

// import "github.com/oraclize/ethereum-api/oraclizeAPI_0.4.sol";

// Changed MAGic to Magic
// Changed ua to userAddress
contract MagicIDContract{

    bytes32 public oraclizeID;
    address public contractOwner;
    /* mapping (address => uint) AccessAgencyMap; */
    mapping (address => MagicIDStruct) address_MagicIDStruct;
    mapping (address => AccessAgencyStruct) address_AccessAgencyStruct;
    mapping (bytes32 => address[]) MagicIDUIN_AgencyAddress;
    mapping (bytes32 => address) AccessAgencyID_AccessAgencyAddress;
    /* mapping (address => IDInstance) userAddress_IDInstance; */

    // Commented here
    /* mapping (address => IDInstance) User_AgencyMap; */

    /* mapping (string => MagicIDStruct) uin_MagicIDElement; */
    mapping (bytes32 => address) uin_UserAddress;
    mapping (bytes32 => mapping(bytes32 => IDInstanceNew)) uin_AgencyAddress_IDInstanceNew;
    /* event IDAccessed(address from, MagicIDStruct whichID); */

    struct IDInstanceNew {
      bool exists;
      uint time_fence;
      bytes32[] location_fence;
    }

    // Changed parentname to parentName, rightfinger to right_finger, leftfinger to left_finger
    struct MagicIDStruct {
      /* MagicIDStruct1 magicIDStruct1; */
      bytes32 bg_uin;
      bytes32 bg_name;
      bytes32 bg_gender;
      bytes32 bg_dob;
      bytes32 bg_parentName;
      bytes32 bg_address;
      bytes32 bg_mobile;
      bytes32 bg_email;
      MagicIDStruct2 magicIDStruct2;
      MagicIDStruct3 magicIDStruct3;
      MagicIDStruct4 magicIDStruct4;
    }

    struct MagicIDStruct2 {
      bytes32 bm_iris_left;
      bytes32 bm_iris_right;
      bytes32 bm_face;
    }

    struct MagicIDStruct3 {
      bytes32 bm_right_finger_1;
      bytes32 bm_right_finger_2;
      bytes32 bm_right_finger_3;
      bytes32 bm_right_finger_4;
      bytes32 bm_right_finger_5;
    }

    struct MagicIDStruct4 {
      bytes32 bm_left_finger_1;
      bytes32 bm_left_finger_2;
      bytes32 bm_left_finger_3;
      bytes32 bm_left_finger_4;
      bytes32 bm_left_finger_5;
    }
    MagicIDStruct[] public MagicIDArray;

    //MODIFIERS
    modifier isIDOwner(bytes32 _bg_uin) {
      if (msg.sender != uin_UserAddress[_bg_uin]) {
        throw;
      }
      _; // continue executing rest of method body
    }

    modifier isContractOwner() {
      if(msg.sender != contractOwner){
        throw;
      }
      _; // continue executing rest of method body
    }

    modifier isAccessAgency() {
      /* if(AccessAgencyMap[msg.sender] > 0) { */
      if(!address_AccessAgencyStruct[msg.sender].isActive) {
        throw;
      }
      _; // continue to access the ID info of the user (citizen)
    }

    function MagicIDContract() {
     contractOwner = msg.sender;
    }

    function createMagicID(bytes32 _bg_uin, bytes32[] _personal, bytes32[] _features1, bytes32[] _features2, bytes32[] _features3) returns (bool){
        uin_UserAddress[_bg_uin] = msg.sender;
        /* var magicID1 = createMagicID1(_bg_uin, msg.sender, _personal); */
        var magicID2 = createMagicID2(_bg_uin, msg.sender, _features1);
        var magicID3 = createMagicID3(_bg_uin, msg.sender, _features2);
        var magicID4 = createMagicID4(_bg_uin, msg.sender, _features3);
        MagicIDStruct memory magicID = MagicIDStruct(_personal[0], _personal[1], _personal[2], _personal[3], _personal[4], _personal[5], _personal[6], _personal[7], magicID2, magicID3, magicID4);
        address_MagicIDStruct[msg.sender] = magicID;
        MagicIDArray.push(magicID);
        return true;
    }

    function createMagicID2(
        bytes32 _bg_uin,
        address sender,
        bytes32[] _features
        ) internal returns (MagicIDStruct2) {
      MagicIDStruct2 ID;
      ID.bm_iris_left = _features[0];
      ID.bm_iris_right = _features[1];
      ID.bm_face = _features[2];
      return ID;
    }

    function createMagicID3(
        bytes32 _bg_uin,
        address sender,
        bytes32[] _features
        ) internal returns (MagicIDStruct3) {
      MagicIDStruct3 ID;
      ID.bm_right_finger_1 = _features[0];
      ID.bm_right_finger_2 = _features[1];
      ID.bm_right_finger_3 = _features[2];
      ID.bm_right_finger_4 = _features[3];
      ID.bm_right_finger_5 = _features[4];
      return ID;
    }

    function createMagicID4(
        bytes32 _bg_uin,
        address sender,
        bytes32[] _features
        ) internal returns (MagicIDStruct4) {
      MagicIDStruct4 ID;
      ID.bm_left_finger_1 = _features[0];
      ID.bm_left_finger_2 = _features[1];
      ID.bm_left_finger_3 = _features[2];
      ID.bm_left_finger_4 = _features[3];
      ID.bm_left_finger_5 = _features[4];
      return ID;
    }

    // Removed keccak256 function here.
    function authID(bytes32 _agency_id, uint _time_fence, bytes32[] _location_fence) returns (bool authIDStatus) {
      MagicIDStruct myMagicID = address_MagicIDStruct[msg.sender];
      bytes32 my_uin = myMagicID.bg_uin;
      address agencyAddress = AccessAgencyID_AccessAgencyAddress[_agency_id];
        // Instead of a modifier this will make sure that only the IDOowner aunthenticates himself/herself. And the agency is active.
        require(msg.sender == uin_UserAddress[my_uin]);
        require(address_AccessAgencyStruct[agencyAddress].isActive);
      MagicIDUIN_AgencyAddress[my_uin].push(agencyAddress);
      /* var newIDInstance = User_AgencyMap[msg.sender]; */

      if(!uin_AgencyAddress_IDInstanceNew[my_uin][_agency_id].exists){
        uin_AgencyAddress_IDInstanceNew[my_uin][_agency_id].exists = true;
      }
      uin_AgencyAddress_IDInstanceNew[my_uin][_agency_id].time_fence = _time_fence;
      uin_AgencyAddress_IDInstanceNew[my_uin][_agency_id].location_fence = _location_fence;

      // This is to set the uin_AgencyAddress_IDInstanceNew[my_uin][_agency_id].exists = false after the time_fence.
    //   oraclizeID = oraclize_query();
      return  true;
    }

    // Change return variables' names here
    function getIDUIN(bytes32 _bg_uin) isAccessAgency returns (bool isRet, bytes32 ret_bg_uin) {
      AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
      if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].exists == true){
          if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].time_fence > now){
            return (false, "");
          }
      }

      address userAddress = uin_UserAddress[_bg_uin];
      MagicIDStruct magicID = address_MagicIDStruct[userAddress];
      return (true, magicID.bg_uin);
    }

    // Change return variables' names here
    function getIDName(bytes32 _bg_uin) isAccessAgency returns (bool isRet, bytes32 ret_bg_name) {
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }

        require(queryingAgency.accessAgencyStruct2.isAllowedName);
      address userAddress = uin_UserAddress[_bg_uin];
      MagicIDStruct magicID = address_MagicIDStruct[userAddress];
      return (true, magicID.bg_name);
    }

    // Change return variables' names here
    function getIDGender(bytes32 _bg_uin) isAccessAgency returns (bool isRet, bytes32 ret_bg_gender) {
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }

        require(queryingAgency.accessAgencyStruct2.isAllowedGender);
      address userAddress = uin_UserAddress[_bg_uin];
      MagicIDStruct magicID = address_MagicIDStruct[userAddress];
      return (true, magicID.bg_gender);
    }

    // Change return variables' names here
    function getIDdob(bytes32 _bg_uin) isAccessAgency returns (bool isRet, bytes32 ret_bg_dob) {
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }

        require(queryingAgency.accessAgencyStruct2.isAllowedDOB);
      address userAddress = uin_UserAddress[_bg_uin];
      MagicIDStruct magicID = address_MagicIDStruct[userAddress];
      return (true, magicID.bg_dob);
    }

    // Change return variables' names here
    function getIDParentName(bytes32 _bg_uin) isAccessAgency returns (bool isRet, bytes32 ret_bg_parentName) {
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }

        require(queryingAgency.accessAgencyStruct2.isAllowedParentName);
      address userAddress = uin_UserAddress[_bg_uin];
      MagicIDStruct magicID = address_MagicIDStruct[userAddress];
      return (true, magicID.bg_parentName);
    }

    // Change return variables' names here
    function getIDaddress(bytes32 _bg_uin) isAccessAgency returns (bool isRet, bytes32 ret_bg_address) {
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }

        require(queryingAgency.accessAgencyStruct2.isAllowedAddress);
      address userAddress = uin_UserAddress[_bg_uin];
      MagicIDStruct magicID = address_MagicIDStruct[userAddress];
      return (true, magicID.bg_address);
    }

    // Change return variables' names here
    function getIDmobile(bytes32 _bg_uin) isAccessAgency returns (bool isRet, bytes32 ret_bg_mobile) {
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }

        require(queryingAgency.accessAgencyStruct2.isAllowedMobile);
      address userAddress = uin_UserAddress[_bg_uin];
      MagicIDStruct magicID = address_MagicIDStruct[userAddress];
      return (true, magicID.bg_mobile);
    }

    // Change return variables' names here
    function getIDemail(bytes32 _bg_uin) isAccessAgency returns (bool isRet, bytes32 ret_bg_email) {
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }

        require(queryingAgency.accessAgencyStruct3.isAllowedEmail);
      address userAddress = uin_UserAddress[_bg_uin];
      MagicIDStruct magicID = address_MagicIDStruct[userAddress];
      return (true, magicID.bg_email);
    }

    // Change return variables' names here
    /* function getIDCurrentLoc(bytes32 _bg_uin) isAccessAgency returns (bool isRet, bytes32 ret_bg_current_loc) {
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }

        require(queryingAgency.isAllowedCurrentLoc);
      address userAddress = uin_UserAddress[_bg_uin];
      MagicIDStruct magicID = address_MagicIDStruct[userAddress];
      return (true, magicID.current_loc);
    } */

    // Change return variables' names here
    function getBioIRIS(bytes32 _bg_uin) isAccessAgency returns (bool isRet, bytes32 ret_bm_iris_left, bytes32 ret_bm_iris_right) {
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].time_fence > now){
              return (false, "", "");
            }
        }

        require(queryingAgency.accessAgencyStruct3.isAllowedBioIRIS);
      address userAddress = uin_UserAddress[_bg_uin];
      MagicIDStruct magicID = address_MagicIDStruct[userAddress];
      return (true, magicID.magicIDStruct2.bm_iris_left, magicID.magicIDStruct2.bm_iris_right);
    }

    // Change return variables' names here
    function getBioFace(bytes32 _bg_uin) isAccessAgency returns (bool isRet, bytes32 ret_bm_face) {
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }

        require(queryingAgency.accessAgencyStruct3.isAllowedBioFace);
      address userAddress = uin_UserAddress[_bg_uin];
      MagicIDStruct magicID = address_MagicIDStruct[userAddress];
      return (true, magicID.magicIDStruct2.bm_face);
    }

    // Change return variables' names here
    function getBioRightFingers(bytes32 _bg_uin) isAccessAgency returns (bool isRet, bytes32 ret_bm_right_finger_1,
      bytes32 ret_bm_right_finger_2,
      bytes32 ret_bm_right_finger_3,
      bytes32 ret_bm_right_finger_4,
      bytes32 ret_bm_right_finger_5) {
          AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
          if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].exists == true){
              if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].time_fence > now){
                return (false, "", "", "", "", "");
              }
          }

        require(queryingAgency.accessAgencyStruct3.isAllowedBioRightFingers);
      address userAddress = uin_UserAddress[_bg_uin];
      MagicIDStruct magicID = address_MagicIDStruct[userAddress];
      return (true, magicID.magicIDStruct3.bm_right_finger_1, magicID.magicIDStruct3.bm_right_finger_2, magicID.magicIDStruct3.bm_right_finger_3, magicID.magicIDStruct3.bm_right_finger_4, magicID.magicIDStruct3.bm_right_finger_5);
    }

    // Change return variables' names here
    function getBioLeftFingers(bytes32 _bg_uin) isAccessAgency returns (bool isRet, bytes32 ret_bm_left_finger_1,
      bytes32 ret_bm_left_finger_2,
      bytes32 ret_bm_left_finger_3,
      bytes32 ret_bm_left_finger_4,
      bytes32 ret_bm_left_finger_5) {
          AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
          if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].exists == true){
              if(uin_AgencyAddress_IDInstanceNew[_bg_uin][queryingAgency.agency_id].time_fence > now){
                return (false, "", "", "", "", "");
              }
          }

        require(queryingAgency.accessAgencyStruct3.isAllowedBioLeftFingers);
      address userAddress = uin_UserAddress[_bg_uin];
      MagicIDStruct magicID = address_MagicIDStruct[userAddress];
      return (true, magicID.magicIDStruct4.bm_left_finger_1, magicID.magicIDStruct4.bm_left_finger_2, magicID.magicIDStruct4.bm_left_finger_3, magicID.magicIDStruct4.bm_left_finger_4, magicID.magicIDStruct4.bm_left_finger_5);
    }

    // uin_AgencyAddress_IDInstanceNew for _bg_uin => exists set to false
    function revokeID(bytes32 _bg_uin, bytes32 _agency_id) returns (bool revokeIDStatus) {
      /* agencyAccessArray = MagicIDUIN_AgencyAddress[_bg_uin];
      for(uint e = 0; e < agencyAccessArray.length; e++){
        uin_AgencyAddress_IDInstanceNew[_bg_uin][agencyAccessArray[e]].exists = false;
      } */
      uin_AgencyAddress_IDInstanceNew[_bg_uin][_agency_id].exists = false;
      return true;
    }

    function __callback(bytes32 oraclizeID, string _result){
        // if(msg.sender != oraclize_cbAddress()) throw;
        // revokeID(); // Put the content of rovokeID function here
    }

    // Check here. Returns the addresses of the agencies who accessed user's uin (or wherever the person entered). Modifier required.
    function getIDAccessors(bytes32 _bg_uin) isIDOwner(_bg_uin) returns (address[] accessorsArray) {
      accessorsArray = MagicIDUIN_AgencyAddress[_bg_uin];
    }

    // Returns name and domain of the agency when given agency's address. Can be called by user as well as other agencies.
    function nameResolveAgency(address _agencyAddress) returns (bytes32, bytes32) {
      AccessAgencyStruct agency = address_AccessAgencyStruct[_agencyAddress];
      return (agency.agency_name, agency.agency_domain);
    }

    // Code here. Who can set isActive to false? contractOwner?
    function setAgencyAccess(bytes32 _bg_uin, bytes32 _agency_id) returns (bool setAgencyAccessStatus) {

      return true;
    }

    struct AccessAgencyStruct {
      bytes32 agency_id;
      bytes32 agency_name;
      bytes32 agency_domain;
      bool isActive;
      AccessAgencyStruct2 accessAgencyStruct2;
      AccessAgencyStruct3 accessAgencyStruct3;
    }

    struct AccessAgencyStruct2 {
      bool isAllowedName;
      bool isAllowedGender;
      bool isAllowedDOB;
      bool isAllowedParentName;
      bool isAllowedAddress;
      bool isAllowedMobile;
    }

    struct AccessAgencyStruct3 {
      bool isAllowedEmail;
      bool isAllowedCurrentLoc;
      bool isAllowedBioIRIS;
      bool isAllowedBioFace;
      bool isAllowedBioRightFingers;
      bool isAllowedBioLeftFingers;
    }
    AccessAgencyStruct[] public AccessAgencyArray;

    function createAccessAgency(bytes32 _agency_id, bytes32 _agency_name, bytes32 _agency_domain, bool isActive, bool[] _features2, bool[] _features3) returns (bool){
        AccessAgencyID_AccessAgencyAddress[_agency_id] = msg.sender;
        /* var accessAgency1 = createAccessAgency1(_agency_id, msg.sender, _features1); */
        var accessAgency2 = createAccessAgency2(_agency_id, msg.sender, _features2);
        var accessAgency3 = createAccessAgency3(_agency_id, msg.sender, _features3);
        AccessAgencyStruct memory agency = AccessAgencyStruct(_agency_id, _agency_name, _agency_domain, isActive, accessAgency2, accessAgency3);
        address_AccessAgencyStruct[msg.sender] = agency;
        AccessAgencyArray.push(agency);
        return true;
    }

    function createAccessAgency2(
        bytes32 _agency_id,
        address sender,
        bool[] _features
        ) internal returns (AccessAgencyStruct2) {
      AccessAgencyStruct2 agencyStruct;
      agencyStruct.isAllowedName = _features[0];
      agencyStruct.isAllowedGender = _features[1];
      agencyStruct.isAllowedDOB = _features[2];
      agencyStruct.isAllowedParentName = _features[3];
      agencyStruct.isAllowedAddress = _features[4];
      agencyStruct.isAllowedMobile = _features[5];
      return agencyStruct;
    }

    function createAccessAgency3(
        bytes32 _agency_id,
        address sender,
        bool[] _features
        ) internal returns (AccessAgencyStruct3) {
      AccessAgencyStruct3 agencyStruct;
      agencyStruct.isAllowedEmail = _features[0];
      agencyStruct.isAllowedCurrentLoc = _features[1];
      agencyStruct.isAllowedBioIRIS = _features[2];
      agencyStruct.isAllowedBioFace = _features[3];
      agencyStruct.isAllowedBioRightFingers = _features[4];
      agencyStruct.isAllowedBioLeftFingers = _features[5];
      return agencyStruct;
    }

  }
