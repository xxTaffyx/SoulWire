# SoulASM Assembler v0.001
# Converts human-readable SoulASM to bytecode

class SoulAssembler:
    def __init__(self):
        self.opcodes = {
            'HALT': 0x00,
            'LOAD': 0x01,
            'ADD': 0x02,
            'PRINT': 0x03,
            'SUB': 0x05,
            'MUL': 0x06,
            'DIV': 0x09,
            'MOD': 0x0A,
            'AND': 0x0B,
            'OR': 0x0C,
            'XOR': 0x0D,
            'NOT': 0x0E,
            'SHL': 0x0F,
            'SHR': 0x10,
            'ROL': 0x11,
            'ROR': 0x12
        }
    
    def assemble(self, code):
        """Convert SoulASM code to bytecode"""
        bytecode = []
        lines = code.strip().split('\n')
        
        for line in lines:
            # Remove comments and extra whitespace
            line = line.split('#')[0].strip()
            if not line:
                continue
                
            parts = line.split()
            instruction = parts[0]
            
            if instruction in self.opcodes:
                bytecode.append(self.opcodes[instruction])
                
                # If instruction has an argument, add it
                if len(parts) > 1:
                    # support decimal, hex (0x...), octal, binary literals
                    try:
                        arg = parts[1]
                        value = int(arg, 0)          # base=0 lets Python infer the base from prefixes
                    except ValueError:
                        print(f"Invalid argument for {instruction}: {parts[1]}")
                        value = 0
                    bytecode.append(value)
            else:
                print(f"Unknown instruction: {instruction}")
        
        return bytecode

# Test it!
if __name__ == "__main__":
    asm = SoulAssembler()
    
    # Your first SoulASM program!
    program = """
    LOAD 42     # Load the answer to everything
    ADD 13      # Add some luck
    PRINT       # Speak the truth
    HALT        # Rest
    LOAD 10     # Load 10
    MUL 2       # Double it
    PRINT       # Should show 20
    SUB 5       # Subtract 5
    PRINT       # Should show 15
    DIV 3       # Divide by 3
    PRINT       # Should show 5
    MOD 4       # Modulo 4
    PRINT       # Should show 1
    AND 0x0F    # Bitwise AND with 0x0F (should still show 1)
    PRINT       # Should show 1
    OR 0xF0     # Bitwise OR with 0xF0 (should show 0xF1)
    PRINT       # Should show 0xF1
    """
    
    bytecode = asm.assemble(program)
    print(f"Assembled bytecode: {bytecode}")
    
    # Now let's run it in our VM!
    import sys
    import os
    # Add parent directory to path
    sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
    
    from vm.tiny_vm import SoulVM
    
    vm = SoulVM()
    # Load our assembled program
    for i, byte in enumerate(bytecode):
        vm.memory[i] = byte
    
    print("\nRunning assembled program:")
    vm.run()