# SoulASM Virtual Machine v0.001
# Started: January 4th, 2026
# "Built from spite and necessity"

class SoulVM:
    def __init__(self):
        self.memory = [0] * 256  # 256 bytes to start small
        self.pc = 0  # program counter
        self.accumulator = 0
        self.running = True
        
        # Our first opcodes!
        self.opcodes = {
            0x00: self.halt,    # HALT - stop execution
            0x01: self.load,    # LOAD - load value into accumulator  
            0x02: self.add,     # ADD - add to accumulator
            0x03: self.print,   # PRINT - output accumulator
        }
        
        print("SoulVM initialized. We're really doing this.")
    
    def halt(self):
        self.running = False
        print("Soul rests.")
    
    def load(self):
        # Next byte is the value to load
        self.pc += 1
        value = self.memory[self.pc]
        self.accumulator = value
    
    def add(self):
        # Add next byte to accumulator
        self.pc += 1
        value = self.memory[self.pc]
        self.accumulator += value
    
    def print(self):
        print(f"Soul speaks: {self.accumulator}")
    
    def run(self):
        # Load a test program: LOAD 42, ADD 13, PRINT, HALT
        test_program = [
            0x01, 42,   # LOAD 42
            0x02, 13,   # ADD 13
            0x03,       # PRINT (should show 55)
            0x00        # HALT
        ]
        
        # Load program into memory
        for i, byte in enumerate(test_program):
            self.memory[i] = byte
        
        # Execute!
        while self.running and self.pc < 256:
            opcode = self.memory[self.pc]
            if opcode in self.opcodes:
                self.opcodes[opcode]()
            self.pc += 1

# Test it immediately - THESE LINES MUST HAVE NO INDENTATION!
if __name__ == "__main__":
    vm = SoulVM()
    vm.run()