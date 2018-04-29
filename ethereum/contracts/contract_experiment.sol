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
    mapping (bytes32 => mapping(bytes32 => IDInstance)) uin_AgencyID_IDInstance;
    /* event IDAccessed(address from, MagicIDStruct whichID); */
    event newOraclizeQuery(string description);
    event Revoke(bytes32 oraclizeID, string uin, string agencyID);

    // Changed IDInstance
    struct IDInstance {
      bool exists;
      uint time_fence;
      string[] location_fence;
    }

    // Changed parentname to parentName, rightfinger to right_finger, leftfinger to left_finger
    struct MagicIDStruct {
      /* MagicIDStruct1 magicIDStruct1; */
      bytes32 bg_uin;
      MagicIDStruct1 magicIDStruct1;
      MagicIDStruct2 magicIDStruct2;
      MagicIDStruct3 magicIDStruct3;
      MagicIDStruct4 magicIDStruct4;
    }

    struct MagicIDStruct1 {
      bytes32 bg_name;
      bytes32 bg_gender;
      bytes32 bg_dob;
      bytes32 bg_parentName;
      bytes32 bg_address;
      bytes32 bg_mobile;
      bytes32 bg_email;
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
    modifier isIDOwner(string _bg_uin) {
      if (msg.sender != uin_UserAddress[stringToBytes32(_bg_uin)]) {
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

    function createMagicID(bytes32 _bg_uin, string[] _personal) returns (bool){
        uin_UserAddress[_bg_uin] = msg.sender;
        bytes32[] personal;
        bytes32[] features1;
        bytes32[] features2;
        bytes32[] features3;
        for(uint8 i=0; i<7; i++){
          personal.push(stringToBytes32(_personal[i]));
        }
        for(uint8 j=7; j<10; j++){
          features1.push(stringToBytes32(_personal[j]));
        }
        for(uint8 k=10; k<15; k++){
          features2.push(stringToBytes32(_personal[k]));
        }
        for(uint8 l=15; l<20; l++){
          features3.push(stringToBytes32(_personal[l]));
        }
        // var magicID1 = createMagicID1(personal);
        // var magicID2 = createMagicID2(features1);
        // var magicID3 = createMagicID3(features2);
        // var magicID4 = createMagicID4(features3);
        MagicIDStruct memory magicID = MagicIDStruct(_bg_uin, createMagicID1(personal), createMagicID2(features1), createMagicID3(features2), createMagicID4(features3));
        address_MagicIDStruct[msg.sender] = magicID;
        MagicIDArray.push(magicID);
        return true;
    }

    function createMagicID1(
        bytes32[] _personal
        ) internal returns (MagicIDStruct1) {
      MagicIDStruct1 ID;
      ID.bg_name = _personal[0];
      ID.bg_gender = _personal[1];
      ID.bg_dob = _personal[2];
      ID.bg_parentName = _personal[3];
      ID.bg_address = _personal[4];
      ID.bg_mobile = _personal[5];
      ID.bg_email = _personal[6];
      return ID;
    }

    function createMagicID2(
        bytes32[] _features
        ) internal returns (MagicIDStruct2) {
      MagicIDStruct2 ID;
      ID.bm_iris_left = _features[0];
      ID.bm_iris_right = _features[1];
      ID.bm_face = _features[2];
      return ID;
    }

    function createMagicID3(
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

    // Removed keccak256 function here
    function authID(string _agency_id, uint _time_fence, string[] _location_fence) returns (bool authIDStatus) {
      var agency_id = stringToBytes32(_agency_id);
      MagicIDStruct myMagicID = address_MagicIDStruct[msg.sender];
      bytes32 my_uin = myMagicID.bg_uin;
      address agencyAddress = AccessAgencyID_AccessAgencyAddress[agency_id];
        // Instead of a modifier this will make sure that only the IDOowner aunthenticates himself/herself. And the agency is active.
        require(msg.sender == uin_UserAddress[my_uin]);
        require(address_AccessAgencyStruct[agencyAddress].isActive);
      MagicIDUIN_AgencyAddress[my_uin].push(agencyAddress);
      /* var newIDInstance = User_AgencyMap[msg.sender]; */

      if(!uin_AgencyID_IDInstance[my_uin][agency_id].exists){
        uin_AgencyID_IDInstance[my_uin][agency_id].exists = true;
      }
      uin_AgencyID_IDInstance[my_uin][agency_id].time_fence = _time_fence;
      uin_AgencyID_IDInstance[my_uin][agency_id].location_fence = _location_fence;

    //   string memory tempString = "json(https://lottery-0610.herokuapp.com/revoke/";
      // This is to set the uin_AgencyID_IDInstance[my_uin][agency_id].exists = false after the time_fence.
      /* oraclizeID = oraclize_query(_time_fence, "URL", "json(https://lottery-0610.herokuapp.com/revoke/", strConcat(bytes32ToString(my_uin), "/" , agency_id, ").[uin, agencyID]" )); */
    //   oraclizeID = oraclize_query(_time_fence, "URL", strConcat(tempString, bytes32ToString(my_uin), "/" , _agency_id, ").[uin, agencyID]" ));
      return  true;
    }

    function getMagicIDFromUIN(bytes32 _bg_uin) internal returns (MagicIDStruct storage) {
      address userAddress = uin_UserAddress[_bg_uin];
      return address_MagicIDStruct[userAddress];
    }

    // Change return variables' names here
    function getIDUIN(string _bg_uin) isAccessAgency returns (bool isRet, string ret_bg_uin) {
      var uin = stringToBytes32(_bg_uin);
      AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
      if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].exists == true){
          if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].time_fence > now){
            return (false, "");
          }
      }
      MagicIDStruct storage magicID = getMagicIDFromUIN(uin);
      return (true, bytes32ToString(magicID.bg_uin));
    }

    // Change return variables' names here
    function getIDName(string _bg_uin) isAccessAgency returns (bool isRet, string ret_bg_name) {
        var uin = stringToBytes32(_bg_uin);
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }
        require(queryingAgency.accessAgencyStruct2.isAllowedName);
      MagicIDStruct storage magicID = getMagicIDFromUIN(uin);
      return (true, bytes32ToString(magicID.magicIDStruct1.bg_name));
    }

    // Change return variables' names here
    function getIDGender(string _bg_uin) isAccessAgency returns (bool isRet, string ret_bg_gender) {
        var uin = stringToBytes32(_bg_uin);
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }
        require(queryingAgency.accessAgencyStruct2.isAllowedGender);
      MagicIDStruct storage magicID = getMagicIDFromUIN(uin);
      return (true, bytes32ToString(magicID.magicIDStruct1.bg_gender));
    }

    // Change return variables' names here
    function getIDdob(string _bg_uin) isAccessAgency returns (bool isRet, string ret_bg_dob) {
        var uin = stringToBytes32(_bg_uin);
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }
        require(queryingAgency.accessAgencyStruct2.isAllowedDOB);
      MagicIDStruct storage magicID = getMagicIDFromUIN(uin);
      return (true, bytes32ToString(magicID.magicIDStruct1.bg_dob));
    }

    // Change return variables' names here
    function getIDParentName(string _bg_uin) isAccessAgency returns (bool isRet, string ret_bg_parentName) {
        var uin = stringToBytes32(_bg_uin);
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }
        require(queryingAgency.accessAgencyStruct2.isAllowedParentName);
      MagicIDStruct storage magicID = getMagicIDFromUIN(uin);
      return (true, bytes32ToString(magicID.magicIDStruct1.bg_parentName));
    }

    // Change return variables' names here
    function getIDaddress(string _bg_uin) isAccessAgency returns (bool isRet, string ret_bg_address) {
        var uin = stringToBytes32(_bg_uin);
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }
        require(queryingAgency.accessAgencyStruct2.isAllowedAddress);
      MagicIDStruct storage magicID = getMagicIDFromUIN(uin);
      return (true, bytes32ToString(magicID.magicIDStruct1.bg_address));
    }

    // Change return variables' names here
    function getIDmobile(string _bg_uin) isAccessAgency returns (bool isRet, string ret_bg_mobile) {
        var uin = stringToBytes32(_bg_uin);
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }
        require(queryingAgency.accessAgencyStruct2.isAllowedMobile);
      MagicIDStruct storage magicID = getMagicIDFromUIN(uin);
      return (true, bytes32ToString(magicID.magicIDStruct1.bg_mobile));
    }

    // Change return variables' names here
    function getIDemail(string _bg_uin) isAccessAgency returns (bool isRet, string ret_bg_email) {
        var uin = stringToBytes32(_bg_uin);
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }
        require(queryingAgency.accessAgencyStruct3.isAllowedEmail);
      MagicIDStruct storage magicID = getMagicIDFromUIN(uin);
      return (true, bytes32ToString(magicID.magicIDStruct1.bg_email));
    }

    // Change return variables' names here
    /* function getIDCurrentLoc(bytes32 _bg_uin) isAccessAgency returns (bool isRet, bytes32 ret_bg_current_loc) {
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyID_IDInstance[_bg_uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyID_IDInstance[_bg_uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }

        require(queryingAgency.isAllowedCurrentLoc);
      address userAddress = uin_UserAddress[_bg_uin];
      MagicIDStruct magicID = address_MagicIDStruct[userAddress];
      return (true, magicID.current_loc);
    } */

    // Change return variables' names here
    function getBioIRIS(string _bg_uin) isAccessAgency returns (bool isRet, string ret_bm_iris_left, string ret_bm_iris_right) {
        var uin = stringToBytes32(_bg_uin);
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].time_fence > now){
              return (false, "", "");
            }
        }
        require(queryingAgency.accessAgencyStruct3.isAllowedBioIRIS);
      MagicIDStruct storage magicID = getMagicIDFromUIN(uin);
      return (true, bytes32ToString(magicID.magicIDStruct2.bm_iris_left), bytes32ToString(magicID.magicIDStruct2.bm_iris_right));
    }

    // Change return variables' names here
    function getBioFace(string _bg_uin) isAccessAgency returns (bool isRet, string ret_bm_face) {
        var uin = stringToBytes32(_bg_uin);
        AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
        if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].exists == true){
            if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].time_fence > now){
              return (false, "");
            }
        }
        require(queryingAgency.accessAgencyStruct3.isAllowedBioFace);
      MagicIDStruct storage magicID = getMagicIDFromUIN(uin);
      return (true, bytes32ToString(magicID.magicIDStruct2.bm_face));
    }

    // Change return variables' names here
    function getBioRightFingers(string _bg_uin) isAccessAgency returns (bool isRet, string ret_bm_right_finger_1,
      string ret_bm_right_finger_2,
      string ret_bm_right_finger_3,
      string ret_bm_right_finger_4,
      string ret_bm_right_finger_5) {
          var uin = stringToBytes32(_bg_uin);
          AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
          if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].exists == true){
              if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].time_fence > now){
                return (false, "", "", "", "", "");
              }
          }
        require(queryingAgency.accessAgencyStruct3.isAllowedBioRightFingers);
      MagicIDStruct storage magicID = getMagicIDFromUIN(uin);
      return (true, bytes32ToString(magicID.magicIDStruct3.bm_right_finger_1), bytes32ToString(magicID.magicIDStruct3.bm_right_finger_2), bytes32ToString(magicID.magicIDStruct3.bm_right_finger_3), bytes32ToString(magicID.magicIDStruct3.bm_right_finger_4), bytes32ToString(magicID.magicIDStruct3.bm_right_finger_5));
    }

    // Change return variables' names here
    function getBioLeftFingers(string _bg_uin) isAccessAgency returns (bool isRet, string ret_bm_left_finger_1,
      string ret_bm_left_finger_2,
      string ret_bm_left_finger_3,
      string ret_bm_left_finger_4,
      string ret_bm_left_finger_5) {
          var uin = stringToBytes32(_bg_uin);
          AccessAgencyStruct queryingAgency = address_AccessAgencyStruct[msg.sender];
          if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].exists == true){
              if(uin_AgencyID_IDInstance[uin][queryingAgency.agency_id].time_fence > now){
                return (false, "", "", "", "", "");
              }
          }
        require(queryingAgency.accessAgencyStruct3.isAllowedBioLeftFingers);
      MagicIDStruct storage magicID = getMagicIDFromUIN(uin);
      return (true, bytes32ToString(magicID.magicIDStruct4.bm_left_finger_1), bytes32ToString(magicID.magicIDStruct4.bm_left_finger_2), bytes32ToString(magicID.magicIDStruct4.bm_left_finger_3), bytes32ToString(magicID.magicIDStruct4.bm_left_finger_4), bytes32ToString(magicID.magicIDStruct4.bm_left_finger_5));
    }

    // uin_AgencyID_IDInstance for _bg_uin => exists set to false. Put a modifier here.
    function revokeID(string _bg_uin, string _agency_id) returns (bool revokeIDStatus) {
      uin_AgencyID_IDInstance[stringToBytes32(_bg_uin)][stringToBytes32(_agency_id)].exists = false;
      return true;
    }

    function __callback(bytes32 oraclizeID, string[] _result){
        // if(msg.sender != oraclize_cbAddress()) throw;
        //  revokeID(_result[0], _result[1]); // Put the content of rovokeID function here
    }

    // Check here. Returns the addresses of the agencies who accessed user's uin (or wherever the person entered). Modifier required.
    function getIDAccessors(string _bg_uin) isIDOwner(_bg_uin) returns (address[] accessorsArray) {
      accessorsArray = MagicIDUIN_AgencyAddress[stringToBytes32(_bg_uin)];
    }

    // Returns name and domain of the agency when given agency's address. Can be called by user as well as other agencies.
    function nameResolveAgency(address _agencyAddress) returns (string, string) {
      AccessAgencyStruct agency = address_AccessAgencyStruct[_agencyAddress];
      return (bytes32ToString(agency.agency_name), bytes32ToString(agency.agency_domain));
    }

    // Code here. Who can set isActive to false? contractOwner? Resorting with contractOwner for now.
    function setAgencyAccess(string _agency_id) isContractOwner returns (bool setAgencyAccessStatus) {

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

    function createAccessAgency(string _agency_id, string _agency_name, string _agency_domain, bool isActive, bool[] _features2, bool[] _features3) returns (bool){
        var agency_id = stringToBytes32(_agency_id);
        AccessAgencyID_AccessAgencyAddress[agency_id] = msg.sender;
        var accessAgency2 = createAccessAgency2(_features2);
        var accessAgency3 = createAccessAgency3(_features3);
        AccessAgencyStruct memory agency = AccessAgencyStruct(agency_id, stringToBytes32(_agency_name), stringToBytes32(_agency_domain), isActive, accessAgency2, accessAgency3);
        address_AccessAgencyStruct[msg.sender] = agency;
        AccessAgencyArray.push(agency);
        return true;
    }

    function createAccessAgency2(
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

    function bytes32ToString(bytes32 x) constant returns (string) {
        bytes memory bytesString = new bytes(32);
        uint charCount = 0;
        for (uint j = 0; j < 32; j++) {
            byte char = byte(bytes32(uint(x) * 2 ** (8 * j)));
            if (char != 0) {
                bytesString[charCount] = char;
                charCount++;
            }
        }
        bytes memory bytesStringTrimmed = new bytes(charCount);
        for (j = 0; j < charCount; j++) {
            bytesStringTrimmed[j] = bytesString[j];
        }
        return string(bytesStringTrimmed);
    }

    function stringToBytes32(string memory source) returns (bytes32 result) {
      bytes memory tempEmptyStringTest = bytes(source);
      if (tempEmptyStringTest.length == 0) {
        return 0x0;
      }
      assembly {
          result := mload(add(source, 32))
      }
    }

  }
// time_fence should be taken in no. of hours from the user and should be converted to seconds timestamp for entering into oraclize query.
